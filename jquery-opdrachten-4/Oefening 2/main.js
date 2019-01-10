$(function () {
  //globale variabele (var)
  var salary;
  let expenses = 18;
  let insurance = 7;
  let contributions = 5;
  var children;
  var female;
  let discountChildren, discountFemale = 0;

  $('#getResult').click(function () {
    salary = parseFloat($('#salary').val());
    children = parseInt($('#children').val());
    female = $('#female');
    $('#result').html('Het totale bedrag is ' + Result());
  });

  //globale functie, wegens die zijn eigen parameters heeft. Daardoor kan de functie herbruikt worden met andere variabelen. De functie is flexibel

  //7% van het salaris
  function SalaryExpenses() {
    return (expenses * (salary / 100));
  }
  //18% van het salaris
  function InsuranceExpenses() {
    return (insurance * (salary / 100));
  }
  //5% van het salaris
  function ContributionsExpenses() {
    return (contributions * (salary / 100));
  }
  //de som van de kosten = SalaryCost
  function SalaryCost() {
    let expensesAmount = SalaryExpenses();
    let insuranceAmount = InsuranceExpenses();
    let contributionsAmount = ContributionsExpenses();
    //optellen van de kosten = expense + insurance + contributions
    return expensesAmount + insuranceAmount + contributionsAmount;
  }
  //indien vrouw korting berekenen op SalaryCost
  function Female() {
    if (female.is(':checked')) {
      discountFemale = (SalaryCost() / 100 * 2);
    } else {
      return discountFemale = 0;
    }
    return discountFemale;
  }
  //indien kinderen korting berekenen op de SalaryCost
  function Children() {
    let salaryCalc = SalaryCost();
    if (children == 3) {
      discountChildren = ((salaryCalc) / 100 * 1);
      //geen return nodig wegens de waarde wordt opgeslaan in de globale variabele
    } else if (children > 3) {
      discountChildren = ((salaryCalc) / 100 * 2);
    }
    else if (children < 3 ) {
      discountChildren = 0;
    }
    return discountChildren;
  }
  //resultaat weergeven in een log
  function Result() {
    let childrenAmount = Children();
    let femaleAmount = Female();

    return salary - (SalaryCost() - childrenAmount - femaleAmount);

  }


});