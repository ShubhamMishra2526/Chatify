import prisma from "@/app/libs/primadb";
import getCurrentUser from "./getCurrentUser";

const getConversationById = async (conversationid: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }

    const conversation = await prisma.conversation.findUnique({
      where: {
        id: conversationid,
      },
      include: {
        users: true,
      },
    });

    return conversation;
  } catch (error: any) {
    return null;
  }
};
export default getConversationById;
