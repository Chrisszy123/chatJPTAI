import Feed from '@components/Feed/Feed'

export default function Home() {
  return (
   <section className='flex-center flex-col w-full'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden'/>
      <span className='orange_gradient text-center'>
        AI Powered Prompts
      </span>
      <p className='desc text-center'>
        ChatJPT is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
    </h1>
    <Feed />
   </section>
  )
}
