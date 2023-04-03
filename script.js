  function attackRoll() {
    const form = document.getElementById("attackformula");
    const mod = form.elements["atmod"];
    const type = form.elements["attype"];

    let atmod = mod.value;
    let atype = type.value;
    let fulltext =
      "[rollable]+" +
      atmod +
      ';{"diceNotation":"1d20+' +
      atmod +
      '","rollType":"to hit","rollAction":"' +
      atype +
      '"}[/rollable]';
    var result = document.getElementById("retattack");
    result.textContent += fulltext;

    navigator.clipboard.writeText(fulltext);
  }

  function damageroll() {
    const form = document.getElementById("damageformula");
    const num = form.elements["dinum"];
    const itype = form.elements["ditype"];
    const mod = form.elements["damod"];
    const atype = form.elements["attype"];
    const dtype = form.elements["damtype"];

    let dinum = num.value;
    let ditype = itype.value;
    let damod = mod.value;
    let attype = atype.value;
    let damtype = dtype.value;

    let fulltext =
      "[rollable](" +
      dinum +
      "d" +
      ditype +
      " + " +
      damod +
      ');{"diceNotation":"' +
      dinum +
      "d" +
      ditype +
      "+" +
      damod +
      '","rollType":"damage","rollAction":"' +
      attype +
      '","rollDamageType":"' +
      damtype +
      '"}[/rollable]';
      var result = document.getElementById("retdamage");
      result.textContent += fulltext;

      navigator.clipboard.writeText(fulltext);
  }
  
  function c2c() {
    document.getElementById('copied').className = "animate"; 
  }