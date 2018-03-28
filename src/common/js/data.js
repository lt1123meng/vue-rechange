export const findData = {
  'LS': [{
    name: '园钉商城',
    route: window.BASE.BASE_SHOP + 'main.html#/index?op=' + sessionStorage.oid,
    imgUrl: 'store.png'
  }, {
    name: '园钉课堂',
    route: window.BASE.BASE_KT,
    imgUrl: 'class.png'
  }],
  'JZ': [{
    name: '园钉商城',
    route: window.BASE.BASE_SHOP + 'main.html#/index?op=' + sessionStorage.oid,
    imgUrl: 'store.png'
  }, {
    name: '园钉课堂',
    route: window.BASE.BASE_KT,
    imgUrl: 'class.png'
  }]
}
export const issueMenu = [
  {
    list: [{
      text: '班级通知',
      icon: 'inform.png',
      route: 'imsg'
    }, {
      text: '图文作业',
      icon: 'tw.png',
      route: 'itw'
    }, {
      text: '题库作业',
      icon: 'tk.png',
      route: 'itk'
    }, {
      text: '上传成绩',
      icon: 'grade.png',
      route: 'isc'
    }, {
      text: '班级投票',
      icon: 'vote.png',
      route: 'iba'
    }, {
      text: '常规常规',
      icon: 'manage.png',
      route: 'idm'
    }, {
      text: '计分考勤',
      icon: 'manage.png',
      route: 'ijfkq'
    }, {
      text: '班级风采',
      icon: 'mien.png',
      route: 'isc'
    }]
  }
]
export const vipData = {
  'LS': [{
    'pc': '0',
    'vip': '1',
    'icon': 'inform.png',
    'route': 'inform_tea.inform',
    'text': '班级通知'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'work.png',
    'route': 'hwork_tea.class',
    'text': '图文作业'
  }, {
    'pc': '0',
    'vip': '2',
    'icon': 'library-work.png',
    'route': 'hwork_tea.class',
    'text': '题库作业'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'manage-score.png',
    'route': 'manage.attend_calendar',
    'text': '计分考勤'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'manage.png',
    'route': 'daily_tea.detail',
    'text': '常规管理'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'mien.png',
    'route': 'classStyle_tea.list',
    'text': '班级风采'
  }, {
    'pc': '0',
    'vip': '2',
    'icon': 'make-test.png',
    'route': '#',
    'text': '试题组卷'
  }, {
    'pc': '0',
    'vip': '3',
    'icon': 'test-download.png',
    'route': '#',
    'text': '组卷下载'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'vote.png',
    'route': 'vote_tea.vote',
    'text': '班级投票'
  }, {
    'pc': '1',
    'vip': '1',
    'icon': 'grade-upload.png',
    'route': '#',
    'text': '表格成绩上传'
  }, {
    'pc': '0',
    'vip': '2',
    'icon': 'upload-grade.png',
    'route': 'g_upload',
    'text': '图文成绩上传'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'message.png',
    'route': 'teacher_noreply',
    'text': '家长留言'
  }, {
    'pc': '0',
    'vip': '3',
    'icon': 'class-info.png',
    'route': '#',
    'text': '班级学情'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'create-class.png',
    'route': 'c_class',
    'text': '创建班级'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'quick-bind.png',
    'route': 'ksbd',
    'text': '快速绑定'
  }],
  'JZ': [{
    'pc': '0',
    'vip': '1',
    'icon': 'inform.png',
    'route': 'inform_jz.inform',
    'text': '班级通知'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'work.png',
    'route': 'hwork_jz',
    'text': '班级作业'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'vote.png',
    'route': 'vote_jz.vote',
    'text': '班级投票'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'manage-score.png',
    'route': 'manage.jz_daily',
    'text': '计分考勤'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'manage.png',
    'route': 'daily_jz.detail',
    'text': '常规管理'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'mien.png',
    'route': 'classStyle_jz.list',
    'text': '班级风采'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'grade.png',
    'route': 'grade',
    'text': '成绩分析'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'vip-integral.png',
    'route': 'wallet',
    'text': '会员充值'
  }, {
    'pc': '0',
    'vip': '2',
    'icon': 'wrong.png',
    'route': 'camp',
    'text': '错题本'
  }, {
    'pc': '0',
    'vip': '2',
    'icon': 'jie.png',
    'route': 'camp',
    'text': '看解析'
  }, {
    'pc': '0',
    'vip': '2',
    'icon': 'class-info.png',
    'route': '#',
    'text': '学生学情'
  }, {
    'pc': '0',
    'vip': '2',
    'icon': 'quick-bind.png',
    'route': '#',
    'text': '智能推送'
  }, {
    'pc': '0',
    'vip': '1',
    'icon': 'timed-train.png',
    'route': 'camp',
    'text': '同步训练'
  }]
}