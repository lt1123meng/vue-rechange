/**
 * Created by LX on 2017/9/1.
 */
import {GetIntegrate} from '@/api/api'

export const Integrate = {
  data() {
    return {
      integrate: ''
    }
  },
  created() {
    this._initIntegrate()
  },
  methods: {
    _initIntegrate() {
      GetIntegrate().then((res) => {
        res = JSON.parse(res.data)
        this.integrate = res.point
        console.log(this)
      })
    }
  }
}
