import Role from '@/types/Role';

interface Message {
    role: Role;
    content: string;
    imageUrl?: string;
    prompt?: string;
}

export default Message;
