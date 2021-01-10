class Dice {
  read(expression) {
    let value;
    let dices = expression.split('+').join(',').split('-').join(',').split(',');
    let allExpression = expression.split('');
    let results = {
      values: [],
      index: [],
    };

    for (let i = 0; i < dices.length; i++) {
      results.values.push(this.roll(dices[i]));
    }

    for (let i = 0; i < allExpression.length; i++) {
      if (allExpression[i] === '+') {
        results.index.push('+');
      } else if (allExpression[i] === '-') {
        results.index.push('-');
      }
    }

    let counter = -1;
    let result = results.values.reduce(function (total, value) {
      if (results.index[counter] === '+' && total !== 0) {
        counter++;
        return total + value.result;
      } else if (results.index[counter] === '-' && total !== 0) {
        counter++;
        return total - value.result;
      }
      counter++;
      return total + value.result;
    }, 0);

    return (value = {
      expression: expression,
      results: results.values,
      result: result < 0 ? 0 : result,
    });
  }

  roll(expression) {
    let value;
    let results = [];
    let result;

    if (expression.includes('d*')) {
      let dices = expression.split('d*');
      for (let i = -1; i < dices[0]; i++) {
        let max = parseInt(dices[1]) + 1;
        let min = 1;
        results.push(Math.floor(Math.random() * (max - min)) + min);
      }

      if (results[0] > results[1]) result = results[0];
      else result = results[1];
    } else if (expression.includes("d'")) {
      let dices = expression.split("d'");
      for (let i = -1; i < dices[0]; i++) {
        let max = parseInt(dices[1]) + 1;
        let min = 1;
        results.push(Math.floor(Math.random() * (max - min)) + min);
      }

      if (results[0] < results[1]) result = results[0];
      else result = results[1];
    } else if (expression.includes('d')) {
      let dices = expression.split('d');
      for (let i = 0; i < dices[0]; i++) {
        let max = parseInt(dices[1]) + 1;
        let min = 1;
        results.push(Math.floor(Math.random() * (max - min)) + min);
      }
      result = results.reduce(function (total, numero) {
        return total + numero;
      }, 0);
    } else {
      results.push(parseInt(expression));
      result = parseInt(expression);
    }

    return (value = {
      expression: expression,
      results: results,
      result: result,
    });
  }
}

export default Dice;
