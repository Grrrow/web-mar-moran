<template>
    <div class="contact">
        <h3 class="contact__title">{{ $t('contact.title') }}</h3>
        <div class="container">
            <div class="contact-info">
                <h1 class="contact-info__title">{{ $t('contact.manager') }}</h1>
                <p>Javier Santacana</p>
                <p>A Piacere Musik</p>
                <p>+34 663 93 38 53</p>
                <a class="ligth-link" href="mailto:javiersantacana@a-piacere-musik.es">javiersantacana@a-piacere-musik.es</a>
                <SocialBanner />
            </div>
            <form id="msform" @submit.prevent="sendEmail">
                <fieldset>
                    <input required type="text" v-model="name" name="name" :placeholder="$t('contact.form.name')" />
                    <input required type="text" v-model="email" name="email" :placeholder="$t('contact.form.email')" />
                    <textarea required name="message" v-model="message" id="" :placeholder="$t('contact.form.message')" cols="30" rows="10"></textarea>
                    <input type="submit" :disabled="token.length === 0" :value="$t('contact.form.send')" class="next action-button" />
                </fieldset>
                <div class="feedback-text">
                    <div v-if="error" class="feedback-text__error"> {{ $t('contact.form.error') }} </div>
                    <div v-if="success" class="feedback-text__success"> {{ $t('contact.form.success') }}</div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import emailjs from 'emailjs-com'
    import SocialBanner from './SocialBanner.vue'
    
    export default {
        components:{
          SocialBanner
        },
        data(){
            return {
                email: '',
                name: '',
                message: '',
                success: false,
                error: false,
                token: ''
            }
        },
        methods: {
            sendEmail(e) {
                 this.success = false;
                 this.error = false
            emailjs.init(import.meta.env.VITE_APP_EMAILJS_USERID)
            emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICEID, import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
            {
                from_name: this.name,
                to_name: "Web Mar Moran Soprano",
                message: this.message,
                reply_to: this.email,
                }).then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    this.success = true;
                    this.resetForm();
                }, (error) => {
                    console.log('FAILED...', error);
                    this.error = true;
                });
            },
            async recaptcha(){
                // (optional) Wait until recaptcha has been loaded.
               // await this.$recaptchaLoaded()
               // this.token = await this.$recaptcha('login')
            },
            resetForm(){
                this.name="";
                this.email = "";
                this.message = "";
            }
        }
    }
    
</script>
<style>
    .contact{
        min-height: 80vh;
        background: #fff;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .contact__title{
        padding-top: 1rem;
        font-family: "Changa", sans-serif;
        font-weight: normal;
        font-size: 48px;
    }
    .contact .container{
        width: 100%;
        display: flex;
        align-items: center;
        align-items: flex-start;
        justify-content: space-between;
        max-width: var(--app-max-width);
        flex-wrap: wrap;
    }
    .contact-info{
        text-align: left;
        padding: 1rem;
    }
    .contact-info__title{
        font-family: "Changa", sans-serif;
        font-weight: normal;
        font-size: 32px;
        margin: 0;
        padding: 0;
    }
    .feedback-text{
        text-align: center;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .feedback-text__error{
        color: red;
        display: block;
        padding: 1rem;
    }
    .feedback-text__success{
        color: rgb(0, 209, 0);
        display: block;
        max-width: 400px;
    }
    fieldset{
        border: none;
    }
    /*inputs*/
    #msform input, #msform textarea {
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
        margin-bottom: 10px;
        width: 100%;
        box-sizing: border-box;
        font-family: montserrat;
        color: #2C3E50;
        font-size: 13px;
    }
    /*buttons*/
    #msform .action-button {
        width: 100px;
        background: #2c3e50;
        font-weight: bold;
        color: white;
        border: 0 none;
        border-radius: 1px;
        cursor: pointer;
        padding: 10px 5px;
        margin: 10px 5px;
        transition: 0.3s;
    }
    #msform .action-button[disabled]{
        background: grey;
        pointer-events: none;
    }
      #msform .action-button:hover, #msform .action-button:focus{
          color: #2c3e50;
          background: #ffff;
          outline: 1px solid #2c3e50;
      }
      @media(max-width: 1025px){
        .contact .container{
            justify-content: center;
        }
        .contact-info{
            width: 100%;
            max-width: 767px;
        }
      }
    a.ligth-link{
        color: #2c3e50;
        margin-bottom: 1rem;
    }

</style>
