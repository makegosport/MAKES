import { getMember } from "@/lib/discord-functions";

interface InvokeFunctionProps {
  discordId?: string;
}

const InvokeFunction: React.FC<InvokeFunctionProps> = ({ discordId }) => {
  if (!discordId) return null;

  return <button onClick={() => getMember(discordId)}>Get Member</button>;
};

export default InvokeFunction;
