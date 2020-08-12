import axios from 'axios'

import Logo from '../components/Logo'
import ViewFullscreen from '../components/ViewFullscreen'

export default {
  name: 'PageIndex',
  components: {
    Logo,
    ViewFullscreen
  },
  created () {
    if (this.$route.query.w) {
      this.updateQuery()
    }
  },
  data () {
    return {
      filter: '',
      card: {
        active: false,
        url: ''
      },
      searched: false,
      loading: false,
      data: [],
      slicer: 10
    }
  },
  methods: {
    addMoreImages: function () {
      const oldY = scrollY

      this.slicer += 10

      setTimeout(() => {
        window.scrollTo(0, oldY)
      }, 200)
    },
    searchFilter: function () {
      this.$router.push({
        path: '/',
        query: {
          w: this.filter
        }
      })
    },
    updateQuery: function () {
      this.loading = true
      this.filter = this.$route.query.w
      this.slicer = 10

      this.searched = Boolean(this.filter)

      return this.hitAPI()
    },
    hitAPI: function () {
      this.data = []

      return axios.get(`https://api.imgur.com/3/gallery/search/?q=${this.filter}`, {
        headers: {
          authorization: 'Client-ID b067d5cb828ec5a'
        }
      }).then(res => {
        const data = res.data.data

        data.forEach(element => {
          if (element.images) {
            element.images.forEach(image => {
              if (image.type.includes('image')) {
                this.data.push(image)
              }
            })
          }
        })

        this.loading = false

        return true
      })
    }
  },
  watch: {
    $route: 'updateQuery'
  }
}
