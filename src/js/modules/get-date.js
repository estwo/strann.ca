(function(strann){
  strann.getDate = function() {
    var currentDate = new Date();

    var date = {
      currentHour: currentDate.getHours(),
      currentWeekday: currentDate.getDay(),
      currentDay: currentDate.getDate(),
      currentMonth: currentDate.getMonth() + 1,
      currentYear: currentDate.getFullYear(),
      fullDate: currentDate.toDateString()
    };

    return date;
  };
})(window.strann = window.strann || {});