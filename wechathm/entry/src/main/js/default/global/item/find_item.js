export default {
    props: {
        name: '',
        index: 0,
        src: '',
        type: '',
        arrow: '/common/find/arrow-right.png'
    },
    itemClick(e) {
        console.info("item ： " + e)
    }
}
