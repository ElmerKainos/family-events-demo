//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post ('/new/email-address', (req,res) => {
    if(req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
            } else {
    res.redirect('/new/code')}
})

router.post ('/new/code', (req,res) => {
    res.redirect('/new/name')
})

router.post ('/new/name', (req,res) => {
    if(req.query.returnUrl) {
res.redirect(req.query.returnUrl)
    } else {
    res.redirect('/new/country')}
})

router.post ('/new/country', (req,res) => {
    if(req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
            } else {
    res.redirect('/new/familysize')}
})



router.post ('/new/familySize', (req,res) => {
    if(req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
            } else {
if (req.body.new.familySize == 'None'){
res.redirect('/new/nonemembers')

} else {
    res.redirect('/new/familymembers')}
}  
})

router.post ('/new/familymembers', (req,res) => {
    if(req.query.returnUrl) {
        res.redirect(req.query.returnUrl)
            } else {
    res.redirect('/new/familyinterests')}
})
router.post ('/new/familyinterests', (req,res) => {
    res.redirect('/new/check')
})
router.post ('/new/check', (req,res) => {
    res.redirect('/new/confirmation')
})