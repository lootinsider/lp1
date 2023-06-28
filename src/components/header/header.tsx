import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="logo">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a href="#" >
              Бонусы
            </a>
          </li>
          <li>
            <a href="#" >
              Доставка
            </a>
          </li>
          <li>
            <a href="#" >
              Помощь
            </a>
          </li>
          <li>
            <a href="#" >
              Отзывы
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
