<template>
  <div class="overflow-hidden">
    <div class="header">
      <h3 class="container p-3 text-muted front-weight-bold">Sócia</h3>
    </div>
    <div class="register-page">
      <form @submit.prevent="CriarConta()">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="msg">Register</div>
                <div class="card-body" style="display: grid;">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 pr-1">
                      <div class="form-group">
                        <input type="firstname" class="form-control" placeholder="Nome" v-model="user.firstname"/>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 pl-1">
                      <div class="form-group">
                        <input type="lastname" class="form-control" placeholder="SobreNome" v-model="user.lastnome"/>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="E-mail" v-model="user.email"/>
                  </div>
                  <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Nº Telefone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" v-model="user.phoneNumber"/>
                  </div>
                  <div class="form-group">
                  <div class="row">
                    <div class="form-edit col-md-5">
                      <input type="city" class="form-control" placeholder="Municipio" v-model="user.city"/>
                    </div>
                    <div class="form-edit col-md-4">
                      <input type="district" class="form-control" placeholder="Bairro" v-model="user.district"/>
                    </div>
                    <div class="form-edit col-md-3">
                      <input type="street" class="form-control" placeholder="Rua" v-model="user.street"/>
                    </div>
                  </div>
                </div>
                <div class="position">
                  <button type="submit" class="btn btn-socia-register"> Registrar </button>
                </div>
              </div>
              <div class="footer text-center">
                <a href="#" class=""> Entrar </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="footer">
      <div class="col">
        <div class="text-center">
          <strong>Socia</strong> &copy; Todos Direitos Reservados.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import axios from 'axios'

const baseURL = 'http://169.239.132.219:8010/apiV2/Socia/Favoritos'
// const apikey = 'olmwSKaTXETReMHnBZd2X12HtOH1U8Ne'

export default {
  data () {
    return {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        district: '',
        street: '',
        city: ''
      },
      contentURL: []
    }
  },
  async created () {
    try {
      // this.$http.headers.common.ApiKey = apikey
      this.$http.get(baseURL,
        {
        }).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  html {
    overflow: hidden;
    outline: none;
  }

  /** link */
  a:link {
    color: rgb(95, 36, 119);
    font-size: .83rem;
  }

  /** hover link */
  a:hover {
    color: rgba(188, 6, 112, .89);
  }

  /** visited link */
  a:visited {
    color: rgba(188, 6, 112, .9);
  }

  /** selected link */
  a:active {
    color: rgba(0, 0, 0, .335);
  }

  i {
    float: left;
    font-size: 18px;
    background: transparent;
    padding: 8px 12px 6px 0;
    font-weight: bold;
  }

  .header {
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05), inset 0 -1px 0 rgba(0,0,0,0.15);
    // -webkit-box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05), inset 0 -1px 0 rgba(0,0,0,0.15);
    background-color: rgba(255,255,255,0.75);
    -webkit-backdrop-filter: blur(1rem);
  }

  .msg {
    color: rgba(0, 0, 0, 0.571);
    margin: 10px 0;
    text-align: center;
  }

  .card {
    border: 0;
    border-radius: 4px;
    width: 360px;
    padding: 20px;
    font-size: 14px;
    box-shadow: 0 8px 12px rgba(0, 0, 0, .067);
    -webkit-box-shadow: 0 2px 5px 2px rgba(0, 0, 0, .067);
  }

  .card-body {
    margin-bottom: 40px;
    padding: 0;
  }

  .register-page {
    height: 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-group {
    display: inline-block;
    margin: .5rem;
  }

  .form-control {
    font-size: 13px;
    // padding-left: 5px;
    border-radius: none;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .form-control:active, .form-control:focus, .form-control {
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid rgb(100, 29, 128);
  }

  .btn-socia-register {
    background: rgb(100, 29, 128);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 5px;
    width: 100%;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
    -webkit-box-shadow: 0 7px 14px rgba(50, 50, 93, .1), 0 3px 6px rgba(0, 0, 0, .08);
  }

  .btn:hover, .btn:active, .btn:focus, .btn {
    outline: none;
    box-shadow: none;
  }

  .position {
    padding: 0 6px;
    padding-top: 10px;
    margin: 15px 0;
  }

  /**
  .clearfix {
    margin-top: 1px;
    height: 15px;
    width: 15px;
    justify-content: center;
  }
  */

  .footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  // .footer-register {
  //   padding: 0.75rem 1.25rem;
  //   background-color: rgba(0, 0, 0, 0.03);
  //   border-top: 1px solid rgba(0, 0, 0, 0.125);
  //   bottom: 0;
  // }

  @media screen and (width: 375px) {
    .col-lg-8 {
      width: 200px;
    }
    .col-lg-4 {
      width: 150px;
    }
  }
</style>
