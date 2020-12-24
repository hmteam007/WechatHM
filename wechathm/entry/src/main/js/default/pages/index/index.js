export default {
    data: {
        index: 0,
        isShow: false,
        textColors: [{
                         'selected': '#000000',
                         'normal': '#00ffa0',
                     }],
        imageList: [{
                        'selected_src': '/common/message_selected.png',
                        'normal_src': '/common/message_normal.png',
                    }, {
                        'selected_src': '/common/contact_selected.png',
                        'normal_src': '/common/contact_normal.png',
                    }, {
                        'selected_src': '/common/find_selected.png',
                        'normal_src': '/common/find_normal.png',
                    }, {
                        'selected_src': '/common/me_selected.png',
                        'normal_src': '/common/me_normal.png',
                    }],
        tabList: [{
                      'name': '消息',
                      'index': 0,
                      'src': '/common/message_selected.png',
                      'textColor': '#00ffa0',
                  }, {
                      'name': '通讯录',
                      'index': 1,
                      'src': '/common/contact_normal.png',
                      'textColor': '#000000',
                  }, {
                      'name': '发现',
                      'index': 2,
                      'src': '/common/find_normal.png',
                      'textColor': '#000000',
                  }, {
                      'name': '我',
                      'index': 3,
                      'src': '/common/me_normal.png',
                      'textColor': '#000000',
                  }],
    },
    textClicked (e) {

    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    change(e) {
        this.index = e.index;
        console.log("index : " + this.index);
    },
    tabItemClick(idx) {
        console.log("item : " + idx);
        for (var i = 0; i < this.tabList.length; i++) {
            if (this.tabList[i].index == idx) {
                this.tabList[i].src = this.imageList[i].selected_src
            } else {
                this.tabList[i].src = this.imageList[i].normal_src
            }
        }
        ;

        this.index = idx;
    },
}
