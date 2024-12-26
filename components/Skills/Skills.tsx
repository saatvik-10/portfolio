import Image from 'next/image';
import IconCloud from '@/components/ui/icon-cloud';

interface SkillsProps {
  img: string;
  name: string;
}

const Skills = ({ img, name }: SkillsProps) => {
  return (
    <section>
      <span>My SKills</span>
      <div className=''>
        <div className='relative flex size-full max-w-lg items-center justify-center overflow-hidden'>
          <IconCloud
            imageArray={[
              '/skills/ex.png',
              '/skills/typescript.png',
              '/skills/hono.png',
              '/skills/java.png',
              '/skills/mongo.png',
              '/skills/nextjs.png',
              '/skills/postgres.png',
              '/skills/prisma.png',
              '/skills/react.png',
              '/skills/tailwind.png',
              '/skills/js.png',
              '/skills/nodejs.png',
            ]}
          />
        </div>
        {/* <div>
          <div className='grid grid-cols-3 md:grid-cols-4 gap-2'>
            <div className='border border-emerald-500 flex flex-col p-2 gap-y-1 w-20 h-24'>
              <img alt='' src={img} />
              <span className='text-zinc-300'>{name}</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
