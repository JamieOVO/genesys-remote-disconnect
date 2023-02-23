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
