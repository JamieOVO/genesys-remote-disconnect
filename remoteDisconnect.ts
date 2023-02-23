const platformClient = require('purecloud-platform-client-v2');
require('dotenv').config();

export async function disconnectConversation(conversationId: string) {
  const client = platformClient.ApiClient.instance;

  client.setEnvironment(platformClient.PureCloudRegionHosts.eu_west_2);

  await client.loginClientCredentialsGrant(
    process.env.GENESYSCLOUD_OAUTHCLIENT_ID,
    process.env.GENESYSCLOUD_OAUTHCLIENT_SECRET
  );

  let apiInstance = new platformClient.ConversationsApi();

  let body = { state: 'disconnected' };

  apiInstance
    .patchConversationsMessage(conversationId, body)
    .then((data: JSON) => {
      console.log(`Success! - ${conversationId}: disconnected`);
    })
    .catch((err: any) => {
      console.log('There was a failure calling patchConversationsMessage');
      console.error(err);
    });
}

const conversationsToDisconnect = [
  'f7397eb9-2a76-498a-8abd-58bf2185083c',
  'ed88a726-46d4-46d3-bfc3-0d8c267800dc',
  'b97bac32-cee9-4ad0-8d41-ec1689c614c9',
  'e7aa6fd1-5a18-4ee0-b772-a272a139df99',
];

function disconnect(conversationList: Array<string>) {
  conversationList.map((convo) => {
    disconnectConversation(convo);
  });
}

disconnect(conversationsToDisconnect);
