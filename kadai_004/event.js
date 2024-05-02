$(window).on({
  'load': () => {
    console.log('loadイベントが発生しました');
  },
  'scroll': () => {
    console.log('スクロールイベントが発生しました');
  },
});