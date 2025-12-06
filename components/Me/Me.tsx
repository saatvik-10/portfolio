import { HoverEffect } from '../ui/card-hover-effect';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const fullStack =
  'I craft end-to-end web applications, handling everything from server architecture to pixel-perfect user interfaces. My focus is on building scalable, performant solutions that bring ideas to reality.';

const blockchain =
  'I develop decentralized applications on Solana, leveraging its high-performance architecture for lightning-fast transactions and it includes smart contracts with Anchor framework on the Solana blockchain.';

export function MeCard() {
  return (
    <div className='w-5xl mx-auto'>
      <HoverEffect items={Me} />
    </div>
  );
}
export const Me = [
  {
    img: '/me/2.jpeg',
    title: 'Full-Stack Developer',
    description: <TextGenerateEffect words={fullStack} />,
    link: '#1',
  },
  {
    img: '/me/4.jpeg',
    title: 'Blockchain Developer',
    description: <TextGenerateEffect words={blockchain} />,
    link: '#2',
  },
];
