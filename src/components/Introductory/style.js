import tw from "tailwind-styled-components";

export const Container = tw.section`
  container
  mx-auto
  mt-6
  max-w-[1200px]
  px-5
  py-7
  flex
  flex-col
  justify-between

  sm:px-10
  sm:py-10
  lg:xl:px-5
  landscape:flex-row-reverse
  landscape:mt-20
  landscape:items-center
`

export const ImgContainer = tw.div`
  ring
  hover:ring-offset-4
  duration-300
  ease-in-out
  hover:scale-110
  rounded-full
  w-[250px]
  h-[250px]
  lg:w-[400px]
  lg:h-[400px]
  md:w-[300px]
  md:h-[300px]
  overflow-hidden

  portrait:mb-14
  portrait:mx-auto

  hover:ring-offset-light
  ring-light
  hover:ring-blue
  bg-blue
`

export const ContentContainer = tw.div`
  text-lg
`

export const TextContainer = tw.div`
  text-center
  uppercase
  font-semibold

  landscape:text-left
`

export const Title = tw.h1`
  text-4xl
  my-4

  lg:text-6xl
  sm:my-6
  sm:text-5xl

  text-blue
`

export const SubTitle = tw.h2`
  text-xl
  font-normal

  portrait:tracking-[0.2em]
  lg:text-3xl
  sm:text-2xl
`

export const ButtonsContainer = tw.div`
  mt-20
  flex
  justify-evenly
  flex-wrap
  gap-8

  sm:mt-10
  lg:mt-20
`

export const ButtonBGBlue = tw.div`
  p-[2px]
  hover:animate-linkedin-btn
  rounded-md
  grow
  
  bg-gradient-to-tr
  from-purple-md
  to-turquoise
`

export const ButtonBGPurple = tw.div`
  p-[2px]
  hover:animate-github-btn
  rounded-md
  grow

  bg-gradient-to-br
  from-pink
  to-purple
`

export const Button = tw.a`
  flex
  items-center
  w-full
  justify-center
  text-center
  py-2
  px-5
  rounded-md
  text-base

  sm:text-lg

  bg-dark
`