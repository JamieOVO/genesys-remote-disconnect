import { disconnectConversation } from './remoteDisconnect';

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
