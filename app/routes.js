//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post ('/new/email-address', (req,res) => {
    res.redirect('/new/code')
})

router.post ('/new/code', (req,res) => {
    res.redirect('/new/name')
})

router.post ('/new/name', (req,res) => {
    res.redirect('/new/country')
})

router.post ('/new/country', (req,res) => {
    res.redirect('/new/familysize')
})



router.post ('/new/familySize', (req,res) => {

if (req.body.new.familySize == 'None'){
res.redirect('/new/nonemembers')

} else {
    res.redirect('/new/familymembers')
}  
})

router.post ('/new/familymembers', (req,res) => {
    res.redirect('/new/familyinterests')
})