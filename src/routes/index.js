import{Router} from "express"
const router = Router()

router.get('/',(req, res) => res.render('index' , {title:'Este es el index'}))
router.get('/about',(req, res) => res.render('about' , {title:'Este es el about  me'}))
router.get('/service',(req, res) => res.render('service' , {title:'Este es el service'}))
router.get('/portafolio',(req, res) => res.render('portafolio' , {title:'Este es el portafolio'}))
router.get('/contact',(req, res) => res.render('contact' , {title:'Este es el about  me'}))
router.get('/testimony',(req, res) => res.render('testimony' , {title:'Este es el testimony '}))

export default router