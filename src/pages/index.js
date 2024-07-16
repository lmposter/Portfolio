import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/Mahe_AI.png'
import AnimatedText from '@/components/AnimatedText'
import AnimatedTextOnce from '@/components/AnimatedTextOnce'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <>
      <Head>
      <title>Mahe Chen</title>
        <meta name="description" content="Mahe Chen's Personal Website" />

      </Head>
      <TransitionEffect />

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Mahe Chen" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority
              sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw,
              50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <TypeAnimation
                sequence={[
                  'Transforming Imagination Into Reality'
                ]}
                cursor={false}
                wrapper="strong"
                className='type !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-!3xl'
                speed={30}
                style={{opacity: '1'}}
                repeat={0}
              />
              <AnimatedTextOnce text="As a passionate computer science student, I thrive on harnessing the power of innovation and coding wizardry to shape a boundless world of possibilities, where dreams are seamlessly woven into awe-inspiring realities." className='my-4 text-base font-medium md:text-sm sm:text-xs'/>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/cv.pdf" target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid dorder-transparent hover:border-dark
                
                dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:border-light md:p-2 md:px-4 md:text-base

                '

                download={true}
                >Resume<LinkArrow className='w-6 h-6 ml-1 
                lg:hidden' />

                </Link>
                <Link href="mailto:hello@mahechen.com" target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark hover:underline dark:text-light md:text-base'
                >Contact</Link>

              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="Mahe Chen" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
