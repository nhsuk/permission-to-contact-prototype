module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

    filters.toArray = val => typeof val === 'string' ? [val] : val;

  // Filter to change a number, like 1 "12" or 04, to a month in words
  //
  // Accepts numbers, strings, data[] and variables
  // If empty prints nothing unless you give it a placeholder which it will print out
  //
  // Usage in your templates:
  //
  // With number with filer
  //                    {{ 1 | monthToWord }}
  // With data from previous input
  //                    {{ data['dob-month'] | monthToWord }}
  // With data that's empty with alternative placeholder
  //                    {{ data['dob-month'] | monthToWord('January') }}

  filters.monthToWord = function(month,placeholder) {
    var months = {
      "1":'January',
      "01":'January',
      "2":'February',
      "02":'February',
      "3":'March',
      "03":'March',
      "4":'April',
      "04":'April',
      "5":'May',
      "05":'May',
      "6":'June',
      "06":'June',
      "7":'July',
      "07":'July',
      "8":'August',
      "08":'August',
      "9":'September',
      "09":'September',
      "10":'October',
      "11":'November',
      "12":'December'
    }

    if (month) {

      month.toString()
      return months[month]

    } else if (placeholder) {
      return placeholder
    } else {
      return
    }

  }

  filters.monthToWordWelsh = function(month,placeholder) {
    var months = {
      "1":'Ionawr',
      "01":'Ionawr',
      "2":'Chwefror',
      "02":'Chwefror',
      "3":'Mawrth',
      "03":'Mawrth',
      "4":'Ebrill',
      "04":'Ebrill',
      "5":'Mai',
      "05":'Mai',
      "6":'Mehefin',
      "06":'Mehefin',
      "7":'Gorffennaf',
      "07":'Gorffennaf',
      "8":'Awst',
      "08":'Awst',
      "9":'Medi',
      "09":'Medi',
      "10":'Hydref',
      "11":'Tachwedd',
      "12":'Rhagfyr'
    }

    if (month) {

      month.toString()
      return months[month]

    } else if (placeholder) {
      return placeholder
    } else {
      return
    }

  }

  return filters
}