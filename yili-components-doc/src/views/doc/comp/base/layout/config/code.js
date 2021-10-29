const base = {
  name: 'LayoutBase',
  template:
  `<yi-layout>
  <yi-header>Header</yi-header>
  <yi-layout>
    <yi-aside>Aside</yi-aside>
    <yi-main>Main</yi-main>
  </yi-layout>
  <yi-footer>Footer</yi-footer>
</yi-layout>

<yi-layout>
  <yi-header>Header</yi-header>
  <yi-main>Main</yi-main>
  <yi-footer>Footer</yi-footer>
</yi-layout>

<yi-layout>
  <yi-header>Header</yi-header>
  <yi-main>Main</yi-main>
</yi-layout>

<yi-layout>
  <yi-header>Header</yi-header>
  <yi-layout>
    <yi-aside>Aside</yi-aside>
    <yi-layout>
      <yi-main>Main</yi-main>
      <yi-footer>Footer</yi-footer>
    </yi-layout>
  </yi-layout>

</yi-layout>

<yi-layout>
  <yi-aside>Aside</yi-aside>
  <yi-layout>
    <yi-header>Header</yi-header>
    <yi-main>Main</yi-main>
    <yi-footer>Footer</yi-footer>
  </yi-layout>
</yi-layout>`
}

export default {
  base
}
