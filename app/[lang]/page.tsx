import Image from 'next/image'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({
  params: { lang }
} : {
  params: { lang: Locale }
}) {
  const { home } = await getDictionary(lang)
  return (
      <section className='container flex items-center justify-center'>
      <section className='flex flex-col gap-4 mt-3 container'>
        <Image src='/images/readme.jpeg' alt="logo" width={800} height={200}></Image>
        <h2>{home.title}</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32..</p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        <p>IMorbi ultricies risus eget sem sollicitudin porta. Mauris sollicitudin ipsum vel ante malesuada ultricies. Nunc malesuada, ipsum a aliquet vulputate, diam mi rhoncus tellus, in imperdiet risus purus ut erat. Sed ornare risus at cursus pulvinar. Praesent tristique ipsum purus, ut fermentum libero suscipit sit amet. Vivamus nunc lectus, sagittis nec est vitae, pharetra consequat sem. Nunc blandit accumsan commodo. Donec non lorem ac enim efficitur molestie et ac risus. Aenean euismod augue at egestas vulputate. Ut volutpat nulla ac ante fringilla maximus. Morbi luctus luctus rhoncus. Ut fermentum luctus quam, a tincidunt odio volutpat vitae. Duis in dapibus nunc. Fusce tempor risus id tellus facilisis cursus. Mauris lacinia sed lectus fringilla facilisis. Proin varius, sapien sit amet dictum varius, justo nulla mattis dolor, a hendrerit metus urna in enim.</p>
        <p>Curabitur non leo sed nisl efficitur lobortis. Cras tincidunt placerat magna, at aliquet ante interdum ut. Suspendisse quis purus turpis. Integer ullamcorper dolor rhoncus lorem fermentum, vel imperdiet nunc varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras vehicula mauris ut odio viverra, et imperdiet libero lobortis. Nulla nunc tortor, venenatis vel dictum vel, consequat et augue. Cras vel eros id nisl pretium dignissim. Vivamus posuere dui nec arcu commodo, aliquam hendrerit tortor convallis. Nam facilisis commodo elit ac consequat.</p>
        <p>Donec molestie porta ullamcorper. Aliquam feugiat vitae ligula et porta. Nulla sollicitudin tempus rutrum. Sed non dapibus augue. Nam maximus nec lectus et tempor. Sed eros sem, accumsan sit amet nisl vitae, pretium venenatis augue. Vivamus commodo nisl sed dictum suscipit. Morbi rutrum malesuada porttitor. Quisque dolor erat, scelerisque sit amet cursus sit amet, tincidunt quis nibh. Cras eu turpis neque. Donec lacinia vulputate urna, a eleifend massa efficitur ac. Proin pulvinar vulputate lacinia. In dapibus libero nec sagittis varius. Donec ut pellentesque eros. Sed sit amet tellus neque.</p>
      </section>
      </section>
  )
}
