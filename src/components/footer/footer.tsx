import { component$ } from '@builder.io/qwik';
import styles from './footer.module.css';

export default component$(() => {
  return (
    <footer>
      <div class={styles.wrapper}>
        <a href="#" target="_blank" class={styles.anchor}>
          <span>Сделано с 💙</span>
        </a>
      </div>
    </footer>
  );
});
