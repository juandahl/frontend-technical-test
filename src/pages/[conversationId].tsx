import React from "react";
import { Router, useRouter } from "next/router";

interface ConversationDetailsProps {
}

const ConversationDetails: React.FC<ConversationDetailsProps> = (props) => {
  const router = useRouter();
  const conversationId = router.query.conversationId;

return (
  <>
    {conversationId}
  </>
)}

export default ConversationDetails;
