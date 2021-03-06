// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// VERSION 7 WELSH //

// Over 18 routing - V7 WELSH
router.post('/v7-Welsh/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "Nac ydw"){
    res.redirect('/v7-Welsh/under18')
  }
  else {
    res.redirect('/v7-Welsh/country')
  }

})

// Confirm email - v7 WELSH
router.post('/v7-Welsh/what-we-ask-for', function (req, res) {

  var install = req.session.data['confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/v7-Welsh/email')
  }
  else {
    res.redirect('/v7-Welsh/what-we-ask-for')
  }

})

// No permission confirmation - V7 WELSH
router.post('/v7-Welsh/no-permission-confirmed', function (req, res) {

  var install = req.session.data['no-permission-confirmed']

  if (install == "Rwy'n cadarnhau nad wyf yn rhoi fy nghaniatâd"){
    res.redirect('/v7-Welsh/no-permission-confirmed')
  }
  else {
    res.redirect('/v7-Welsh/permission')
  }

})

// Pregnant routing - V7 WELSH
router.post('/v7-Welsh/are-you-pregnant', function (req, res) {

  var install = req.session.data['sex']

  if (install == "Benyw"){
    res.redirect('/v7-Welsh/are-you-pregnant')
  }
  else {
    res.redirect('/v7-Welsh/flu-jab')
  }

})

// Contact with different people routing - V7 WELSH
router.post('/v7-Welsh/health-social-care', function (req, res) {

  var install = req.session.data['work']

  if (install == "Ydyw, mae'r gwaith rydw i'n ei wneud ar hyn o bryd yn golygu bod gen i gyswllt wyneb yn wyneb â gwahanol bobl bron bob dydd"){
    res.redirect('/v7-Welsh/health-social-care')
  }
  else {
    res.redirect('/v7-Welsh/tested')
  }

})

// Tested routing - V7 WELSH
router.post('/v7-Welsh/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Ydw"){
    res.redirect('/v7-Welsh/test-results')
  }
  else {
    res.redirect('/v7-Welsh/health-questions-interruption')
  }

})

// Country routing - V7 WELSH
router.post('/v7-Welsh/email-interruption', function (req, res) {

  var install = req.session.data['country']

  if (install == "Dim o’r rhain"){
    res.redirect('/v7-Welsh/outside-uk')
  }
  else {
    res.redirect('/v7-Welsh/email-interruption')
  }

})

// Permission routing - V7 WELSH
router.post('/v7-Welsh/no-permission', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "Na, dydw i ddim yn rhoi fy nghaniatâd"){
    res.redirect('/v7-Welsh/no-permission')
  }
  else {
    res.redirect('/v7-Welsh/hear-from-nhsd')
  }

})

// Ethnicity question routing - V7 WELSH
router.post('/v7-Welsh/work', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "Gwyn"){
    res.redirect('/v7-Welsh/ethnic-group-white')
  }
  if (install == "Grwpiau ethnig cymysg neu luosog"){
    res.redirect('/v7-Welsh/ethnic-group-mixed')
  }
  if (install == "Prydeinig Asiaidd neu Asiaidd"){
    res.redirect('/v7-Welsh/ethnic-group-asian')
  }
  if (install == "Du, Affricanaidd, Du Prydeinig neu Caribî"){
    res.redirect('/v7-Welsh/ethnic-group-black')
  }
  else {
    res.redirect('/v7-Welsh/work')
  }

})

router.post('/v7-Welsh/work2', function (req, res) {
  res.redirect('/v7-Welsh/work')
})

// END OF VERSION 7 WELSH ROUTING //



// VERSION 7 //

// Contact preference - V7
router.post('/v7/phone-number', function (req, res) {

  var install = req.session.data['contact-by-phone']

  if (install == "No"){
    res.redirect('/v7/your-sex')
  }
  else {
    res.redirect('/v7/phone-number')
  }

})

// Over 18 routing - V7
router.post('/v7/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "No"){
    res.redirect('/v7/under18')
  }
  else {
    res.redirect('/v7/country')
  }

})

// Confirm email - v7
router.post('/v7/what-we-ask-for', function (req, res) {

  var install = req.session.data['confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/v7/email')
  }
  else {
    res.redirect('/v7/what-we-ask-for')
  }

})

// No permission confirmation - V7
router.post('/v7/no-permission-confirmed', function (req, res) {

  var install = req.session.data['no-permission-confirmed']

  if (install == "I confirm I do not give my permission"){
    res.redirect('/v7/no-permission-confirmed')
  }
  else {
    res.redirect('/v7/permission')
  }

})

// Pregnant routing - V7
router.post('/v7/are-you-pregnant', function (req, res) {

  var install = req.session.data['sex']

  if (install == "Female"){
    res.redirect('/v7/are-you-pregnant')
  }
  else {
    res.redirect('/v7/flu-jab')
  }

})

// Contact with different people routing - V7
router.post('/v7/health-social-care', function (req, res) {

  var install = req.session.data['work']

  if (install == "Yes, the work I'm doing at the moment means I have face to face contact with different people every day"){
    res.redirect('/v7/health-social-care')
  }
  else {
    res.redirect('/v7/tested')
  }

})

// Tested routing - V7
router.post('/v7/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v7/test-results')
  }
  else {
    res.redirect('/v7/health-questions-interruption')
  }

})

// Country routing - V7
router.post('/v7/email-interruption', function (req, res) {

  var install = req.session.data['country']

  if (install == "None of these"){
    res.redirect('/v7/outside-uk')
  }
  else {
    res.redirect('/v7/email-interruption')
  }

})

// Permission routing - V7
router.post('/v7/no-permission', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "No, I do not give my permission"){
    res.redirect('/v7/no-permission')
  }
  else {
    res.redirect('/v7/hear-from-nhsd')
  }

})

// Ethnicity question routing - V7
router.post('/v7/work', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/v7/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/v7/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/v7/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/v7/ethnic-group-black')
  }
  else {
    res.redirect('/v7/work')
  }

})

router.post('/v7/work2', function (req, res) {
  res.redirect('/v7/work')
})

// END OF VERSION 7 ROUTING //


// THERE ARE NO VERSION 6 WELSH //


// VERSION 6 //

// Contact preference - V6
router.post('/v6/phone-number', function (req, res) {

  var install = req.session.data['contact-by-phone']

  if (install == "No"){
    res.redirect('/v6/your-sex')
  }
  else {
    res.redirect('/v6/phone-number')
  }

})

// Over 18 routing - V6
router.post('/v6/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "No"){
    res.redirect('/v6/under18')
  }
  else {
    res.redirect('/v6/country')
  }

})

// Confirm email - v6
router.post('/v6/what-we-ask-for', function (req, res) {

  var install = req.session.data['confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/v6/email')
  }
  else {
    res.redirect('/v6/what-we-ask-for')
  }

})

// No permission confirmation - V6
router.post('/v6/no-permission-confirmed', function (req, res) {

  var install = req.session.data['no-permission-confirmed']

  if (install == "I confirm I do not give my permission"){
    res.redirect('/v6/no-permission-confirmed')
  }
  else {
    res.redirect('/v6/permission')
  }

})

// Pregnant routing - V6
router.post('/v6/are-you-pregnant', function (req, res) {

  var install = req.session.data['sex']

  if (install == "Female"){
    res.redirect('/v6/are-you-pregnant')
  }
  else {
    res.redirect('/v6/flu-jab')
  }

})

// Contact with different people routing - V6
router.post('/v6/health-social-care', function (req, res) {

  var install = req.session.data['work']

  if (install == "Yes, the work I'm doing at the moment means I have face to face contact with different people every day"){
    res.redirect('/v6/health-social-care')
  }
  else {
    res.redirect('/v6/tested')
  }

})

// Tested routing - V6
router.post('/v6/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v6/test-results')
  }
  else {
    res.redirect('/v6/health-questions-interruption')
  }

})

// Country routing - V6
router.post('/v6/email-interruption', function (req, res) {

  var install = req.session.data['country']

  if (install == "None of these"){
    res.redirect('/v6/outside-uk')
  }
  else {
    res.redirect('/v6/email-interruption')
  }

})

// Permission routing - V6
router.post('/v6/no-permission', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "No, I do not give my permission"){
    res.redirect('/v6/no-permission')
  }
  else {
    res.redirect('/v6/hear-from-nhsd')
  }

})

// Ethnicity question routing - V6
router.post('/v6/work', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/v6/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/v6/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/v6/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/v6/ethnic-group-black')
  }
  else {
    res.redirect('/v6/work')
  }

})

// END OF VERSION 6 ROUTING //


// VERSION 5 WELSH //

// Over 18 routing - V5 WELSH
router.post('/v5-Welsh/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "Nac ydw"){
    res.redirect('/v5-Welsh/under18')
  }
  else {
    res.redirect('/v5-Welsh/country')
  }

})

// Confirm email - v5 WELSH
router.post('/v5-Welsh/what-we-ask-for', function (req, res) {

  var install = req.session.data['confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/v5-Welsh/email')
  }
  else {
    res.redirect('/v5-Welsh/what-we-ask-for')
  }

})

// No permission confirmation - V5 WELSH
router.post('/v5-Welsh/no-permission-confirmed', function (req, res) {

  var install = req.session.data['no-permission-confirmed']

  if (install == "Rwy'n cadarnhau nad wyf yn rhoi fy nghaniatâd"){
    res.redirect('/v5-Welsh/no-permission-confirmed')
  }
  else {
    res.redirect('/v5-Welsh/permission')
  }

})

// Pregnant routing - V5 WELSH
router.post('/v5-Welsh/are-you-pregnant', function (req, res) {

  var install = req.session.data['sex']

  if (install == "Benyw"){
    res.redirect('/v5-Welsh/are-you-pregnant')
  }
  else {
    res.redirect('/v5-Welsh/flu-jab')
  }

})

// Contact with different people routing - V5 WELSH
router.post('/v5-Welsh/health-social-care', function (req, res) {

  var install = req.session.data['work']

  if (install == "Ydyw, mae'r gwaith rydw i'n ei wneud ar hyn o bryd yn golygu bod gen i gyswllt wyneb yn wyneb â gwahanol bobl bron bob dydd"){
    res.redirect('/v5-Welsh/health-social-care')
  }
  else {
    res.redirect('/v5-Welsh/tested')
  }

})

// Tested routing - V5 WELSH
router.post('/v5-Welsh/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Ydw"){
    res.redirect('/v5-Welsh/test-results')
  }
  else {
    res.redirect('/v5-Welsh/health-questions-interruption')
  }

})

// Country routing - V5 WELSH
router.post('/v5-Welsh/email-interruption', function (req, res) {

  var install = req.session.data['country']

  if (install == "Dim o’r rhain"){
    res.redirect('/v5-Welsh/outside-uk')
  }
  else {
    res.redirect('/v5-Welsh/email-interruption')
  }

})

// Permission routing - V5 WELSH
router.post('/v5-Welsh/no-permission', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "Na, dydw i ddim yn rhoi fy nghaniatâd"){
    res.redirect('/v5-Welsh/no-permission')
  }
  else {
    res.redirect('/v5-Welsh/hear-from-nhsd')
  }

})

// Ethnicity question routing - V5 WELSH
router.post('/v5-Welsh/work', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "Gwyn"){
    res.redirect('/v5-Welsh/ethnic-group-white')
  }
  if (install == "Grwpiau ethnig cymysg neu luosog"){
    res.redirect('/v5-Welsh/ethnic-group-mixed')
  }
  if (install == "Prydeinig Asiaidd neu Asiaidd"){
    res.redirect('/v5-Welsh/ethnic-group-asian')
  }
  if (install == "Du, Affricanaidd, Du Prydeinig neu Caribî"){
    res.redirect('/v5-Welsh/ethnic-group-black')
  }
  else {
    res.redirect('/v5-Welsh/work')
  }

})

// END OF VERSION 5 WELSH ROUTING //



// VERSION 5 //

// Contact preference - V5
router.post('/v5/phone-number', function (req, res) {

  var install = req.session.data['contact-by-phone']

  if (install == "No"){
    res.redirect('/v5/your-sex')
  }
  else {
    res.redirect('/v5/phone-number')
  }

})

// Over 18 routing - V5
router.post('/v5/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "No"){
    res.redirect('/v5/under18')
  }
  else {
    res.redirect('/v5/country')
  }

})

// Confirm email - v5
router.post('/v5/what-we-ask-for', function (req, res) {

  var install = req.session.data['confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/v5/email')
  }
  else {
    res.redirect('/v5/what-we-ask-for')
  }

})

// No permission confirmation - V5
router.post('/v5/no-permission-confirmed', function (req, res) {

  var install = req.session.data['no-permission-confirmed']

  if (install == "I confirm I do not give my permission"){
    res.redirect('/v5/no-permission-confirmed')
  }
  else {
    res.redirect('/v5/permission')
  }

})

// Pregnant routing - V5
router.post('/v5/are-you-pregnant', function (req, res) {

  var install = req.session.data['sex']

  if (install == "Female"){
    res.redirect('/v5/are-you-pregnant')
  }
  else {
    res.redirect('/v5/flu-jab')
  }

})

// Contact with different people routing - V5
router.post('/v5/health-social-care', function (req, res) {

  var install = req.session.data['work']

  if (install == "Yes, the work I'm doing at the moment means I have face to face contact with different people every day"){
    res.redirect('/v5/health-social-care')
  }
  else {
    res.redirect('/v5/tested')
  }

})

// Tested routing - V5
router.post('/v5/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v5/test-results')
  }
  else {
    res.redirect('/v5/health-questions-interruption')
  }

})

// Country routing - V5
router.post('/v5/email-interruption', function (req, res) {

  var install = req.session.data['country']

  if (install == "None of these"){
    res.redirect('/v5/outside-uk')
  }
  else {
    res.redirect('/v5/email-interruption')
  }

})

// Permission routing - V5
router.post('/v5/no-permission', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "No, I do not give my permission"){
    res.redirect('/v5/no-permission')
  }
  else {
    res.redirect('/v5/hear-from-nhsd')
  }

})

// Ethnicity question routing - V5
router.post('/v5/work', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/v5/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/v5/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/v5/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/v5/ethnic-group-black')
  }
  else {
    res.redirect('/v5/work')
  }

})

// END OF VERSION 5 ROUTING //


// Over 18 routing - V4
router.post('/v4/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "No"){
    res.redirect('/v4/under18')
  }
  else {
    res.redirect('/v4/country')
  }

})

/* Over 18 routing from DOB - V4
router.post('/v4/postcode', function (req, res) {

  var install = req.session.data['dob-year']

  if (install > "2002"){
    res.redirect('/v4/under18')
  }
  else {
    res.redirect('/v4/postcode')
  }

})

*/

// Confirm email - v4
router.post('/v4/what-we-ask-for', function (req, res) {

  var install = req.session.data['confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/v4/email')
  }
  else {
    res.redirect('/v4/what-we-ask-for')
  }

})

// No permission confirmation - V4
router.post('/v4/no-permission-confirmed', function (req, res) {

  var install = req.session.data['no-permission-confirmed']

  if (install == "I confirm I do not give my permission"){
    res.redirect('/v4/no-permission-confirmed')
  }
  else {
    res.redirect('/v4/permission')
  }

})

// Pregnant routing - V4
router.post('/v4/are-you-pregnant', function (req, res) {

  var install = req.session.data['sex']

  if (install == "Female"){
    res.redirect('/v4/are-you-pregnant')
  }
  else {
    res.redirect('/v4/flu-jab')
  }

})

// Contact with different people routing - V4
router.post('/v4/health-social-care', function (req, res) {

  var install = req.session.data['work']

  if (install == "Yes, the work I'm doing at the moment means I have face to face contact with different people every day"){
    res.redirect('/v4/health-social-care')
  }
  else {
    res.redirect('/v4/tested')
  }

})

// Tested routing - V4
router.post('/v4/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v4/test-results')
  }
  else {
    res.redirect('/v4/health-questions-interruption')
  }

})

// Country routing - V4
router.post('/v4/email-interruption', function (req, res) {

  var install = req.session.data['country']

  if (install == "None of these"){
    res.redirect('/v4/outside-uk')
  }
  else {
    res.redirect('/v4/email-interruption')
  }

})

// Permission routing - V4
router.post('/v4/hear-from-nhsd', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "No, I do not give my permission"){
    res.redirect('/v4/no-permission')
  }
  else {
    res.redirect('/v4/hear-from-nhsd')
  }

})

// Ethnicity question routing - V4
router.post('/v4/work', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/v4/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/v4/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/v4/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/v4/ethnic-group-black')
  }
  else {
    res.redirect('/v4/work')
  }

})

// Over 18 routing from DOB - V3
router.post('/v3/country', function (req, res) {

  var install = req.session.data['dob-year']

  if (install > "2002"){
    res.redirect('/v3/under18')
  }
  else {
    res.redirect('/v3/country')
  }

})

// No permission confirmation - V3
router.post('/v3/no-permission-confirmed', function (req, res) {

  var install = req.session.data['no-permission-confirmed']

  if (install == "I do not give my permission"){
    res.redirect('/v3/no-permission-confirmed')
  }
  else {
    res.redirect('/v3/permission')
  }

})

// Pregnant routing - V3
router.post('/v3/are-you-pregnant', function (req, res) {

  var install = req.session.data['sex']

  if (install == "Female"){
    res.redirect('/v3/are-you-pregnant')
  }
  else {
    res.redirect('/v4/permission')
  }

})

// Tested routing - V3
router.post('/v3/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v3/test-results')
  }
  else {
    res.redirect('/v3/cancer')
  }

})

// Northern Ireland routing - V3
router.post('/v3/postcode', function (req, res) {

  var install = req.session.data['country']

  if (install == "Northern Ireland"){
    res.redirect('/v3/NI-postcode')
  }
  if (install == "None of these"){
    res.redirect('/v3/outside-uk')
  }
  else {
    res.redirect('/v3/postcode')
  }

})

// Permission routing - V3
router.post('/v3/hear-from-nhsd', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "No, I do not give my permission"){
    res.redirect('/v3/no-permission')
  }
  else {
    res.redirect('/v3/hear-from-nhsd')
  }

})

// Ethnicity question routing - V3
router.post('/v3/work', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/v3/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/v3/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/v3/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/v3/ethnic-group-black')
  }
  else {
    res.redirect('/v3/work')
  }

})

// Country routing - V1.1
router.post('/v1-1/postcode', function (req, res) {

  var install = req.session.data['country']

  if (install == "Scotland"){
    res.redirect('/v1-1/nation-redirect')
  }
  if (install == "Wales"){
    res.redirect('/v1-1/nation-redirect')
  }
  if (install == "Northern Ireland"){
    res.redirect('/v1-1/nation-redirect')
  }
  else {
    res.redirect('/v1-1/postcode')
  }

})

// Tested routing - V1.1
router.post('/v1-1/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v1-1/test-results')
  }
  else {
    res.redirect('/v1-1/check-answers')
  }

})

// Over 18 routing - V1.1
router.post('/v1-1/country', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "Yes"){
    res.redirect('/v1-1/country')
  }
  else {
    res.redirect('/v1-1/under18')
  }

})

/* Over 18 routing - V1.2
router.post('/v1-2/name', function (req, res) {

  var install = req.session.data['18orover']

  if (install == "No"){
    res.redirect('/v1-2/under18')
  }
  else {
    res.redirect('/v1-2/name')
  }

})
*/

// Over 18 routing from DOB - V1.2
router.post('/v1-2/name', function (req, res) {

  var install = req.session.data['dob-year']

  if (install > "2002"){
    res.redirect('/v1-2/under18')
  }
  else {
    res.redirect('/v1-2/name')
  }

})

// Tested routing - V1.2
router.post('/v1-2/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v1-2/test-results')
  }
  else {
    res.redirect('/v1-2/permission')
  }

})

// Northern Ireland routing - V1.2
router.post('/v1-2/postcode', function (req, res) {

  var install = req.session.data['country']

  if (install == "Northern Ireland"){
    res.redirect('/v1-2/NI-postcode')
  }
  if (install == "None of these"){
    res.redirect('/v1-2/outside-uk')
  }
  else {
    res.redirect('/v1-2/postcode')
  }

})

// Permission routing - V1.2
router.post('/v1-2/hear-from-nhsd', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "I do not give my permission"){
    res.redirect('/v1-2/no-permission')
  }
  else {
    res.redirect('/v1-2/hear-from-nhsd')
  }

})


// Over 18 routing from DOB - V2
router.post('/v2/are-you-pregnant', function (req, res) {

  var install = req.session.data['dob-year']

  if (install > "2002"){
    res.redirect('/v2/under18')
  }
  else {
    res.redirect('/v2/are-you-pregnant')
  }

})

// Pregnant routing - V2
router.post('/v2/name', function (req, res) {

  var install = req.session.data['areyoupregnant']

  if (install == "Yes"){
    res.redirect('/v2/pregnant')
  }
  else {
    res.redirect('/v2/name')
  }

})

// Tested routing - V2
router.post('/v2/test-results', function (req, res) {

  var install = req.session.data['tested']

  if (install == "Yes"){
    res.redirect('/v2/test-results')
  }
  else {
    res.redirect('/v2/cancer')
  }

})

// Northern Ireland routing - V2
router.post('/v2/postcode', function (req, res) {

  var install = req.session.data['country']

  if (install == "Northern Ireland"){
    res.redirect('/v2/NI-postcode')
  }
  if (install == "None of these"){
    res.redirect('/v2/outside-uk')
  }
  else {
    res.redirect('/v2/postcode')
  }

})

// Permission routing - V2
router.post('/v2/hear-from-nhsd', function (req, res) {

  var install = req.session.data['give-permission']

  if (install == "No, I do not agree to give my permission"){
    res.redirect('/v2/no-permission')
  }
  else {
    res.redirect('/v2/hear-from-nhsd')
  }

})

// Ethnicity question routing - V2
router.post('/v2/email', function (req, res) {

  var install = req.session.data['ethnic-group']

  if (install == "White"){
    res.redirect('/v2/ethnic-group-white')
  }
  if (install == "Mixed or multiple ethnic groups"){
    res.redirect('/v2/ethnic-group-mixed')
  }
  if (install == "Asian or Asian British"){
    res.redirect('/v2/ethnic-group-asian')
  }
  if (install == "Black, African, Black British or Caribbean"){
    res.redirect('/v2/ethnic-group-black')
  }
  if (install == "Another ethnic group"){
    res.redirect('/v2/ethnic-group-other')
  }
  else {
    res.redirect('/v2/email')
  }

})

// Opt out confirm email - v1
router.post('/opt-out-v1/opt-out-confirm', function (req, res) {

  var install = req.session.data['opt-out-confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/opt-out-v1/opt-out')
  }
  else {
    res.redirect('/opt-out-v1/opt-out-confirm')
  }

})

// Opt out confirm email - v2
router.post('/opt-out-v2/confirm', function (req, res) {

  var install = req.session.data['opt-out-confirm-email']

  if (install == "No, that is not my email address"){
    res.redirect('/opt-out-v2/')
  }
  else {
    res.redirect('/opt-out-v2/confirm')
  }

})

module.exports = router;
