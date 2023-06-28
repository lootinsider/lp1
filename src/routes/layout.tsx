import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Celebrate from '../components/celebrate/celebrate';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Celebrate />
        <Slot />
      </main>
      <Footer />
    </>
  );
});
