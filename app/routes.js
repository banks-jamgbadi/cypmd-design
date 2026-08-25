//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/change-request/type', (req, res) => {
  const type = req.body.changeType
  if (type === 'add-pupil') {
    res.redirect('/change-request/add-pupil/identity')
  } else {
    res.redirect('/change-request/type')
  }
})


router.post('/change-request/add-pupil', (req, res) => {
 
  res.redirect('/change-request/add-pupil/found-included')
})

router.post('/change-request/add-pupil/identity', (req, res) => {
  // Background check runs here
  // For prototype — simulate match found
  res.redirect('/change-request/add-pupil/found-included')
  // Or to skip the check: res.redirect('/change-request/add-pupil/cohort')
})

router.post('/change-request/add-pupil/cohort', (req, res) => {
  res.redirect('/change-request/add-pupil/evidence')
})

router.post('/change-request/add-pupil/evidence', (req, res) => {
  res.redirect('/change-request/add-pupil/confirm')
})

router.post('/change-request/add-pupil/found-included', (req, res) => {
  const cancel = req.body.cancelRequest
  if (cancel === 'yes') {
    res.redirect('/check-data')
  } else {
    res.redirect('/change-request/add-pupil/cohort')
  }
})

router.post('/change-request/add-pupil/submitted', (req, res) => {
  res.redirect('/change-request/add-pupil/submitted')
})

router.get('/admin-egress/pull', (req, res) => {
  res.render('admin-egress/pull')
})

router.post('/admin-egress/pull', (req, res) => {
  res.redirect('/admin-egress/results')
})

router.post('/admin-egress/results', (req, res) => {
  res.redirect('/admin-egress/preprocessing')
})

router.post('/admin-egress/summary', (req, res) => {
  res.redirect('/admin-egress/complete')
})

router.post('/admin-egress/summary', (req, res) => {
  res.redirect('/admin-egress/complete')
})

const studentsData = require('../data/students-data')

router.get('/check-data/students', (req, res) => {
  const datasetKey = req.query.dataset || 'included'
  const dataset = studentsData[datasetKey]
  res.render('check-data', { dataset, datasetKey })
})