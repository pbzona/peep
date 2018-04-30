function insertDate() {
  var dateContainer = document.getElementById('dateContainer');
  var currentYear = new Date().getFullYear();

  dateContainer.innerText = currentYear;
};

module.exports = insertDate;