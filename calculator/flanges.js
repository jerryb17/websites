function Flansche() {
  
  this._isBlind = false;
  this._valueArray = new Array();
  this._inputIds = new Array("fmAussenDurchm", "fmInnenDurchm", "fmBlattSt", "fmBohrAnz", "fmBohrDurchm", "fmKanten", "fmD9", "fmInnenDurchm2", "fmDichtLeiste");
  this._evalConst = 7.85;
  
  this.Flansche = function() { }
    
  this.setBlind = function() {
    
    this._isBlind = true;
    return this._blindForm();
    
  }
  
  this.setNormal = function() {
    
    this._isBlind = false; 
    
    for(var i = 0 ;i < this._inputIds.length ; i++) {
     document.getElementById(this._inputIds[i]).value = "" ;
    }
    return this._blindForm();
    
  }
  
  this._blindForm = function() {
    
    /*
    with (document.getElementById("fmBlind").style)
      if (this._isBlind == true)
        display = "block";
      else
        display = "none";
    */
    
    with (document.getElementById("fmInnenDurchmesser").style)
      if (this._isBlind == true)
        display = "none";
      else
        display = "block";
    
    with (document.getElementById("fmKantenbruch").style)
      if (this._isBlind == true)
        display = "none";
      else
        display = "block";
    
    return true;
    
  }
  
  
  this._evalFormulaA = function() {
    
    return ( ( ( ( Math.pow( this._valueArray[0], 2 ) - Math.pow( this._valueArray[1], 2 ) ) / 100000 ) * ( this._valueArray[2] / 100 ) * Math.pow( this._evalConst, 2 ) ) - ( ( Math.pow( this._valueArray[4], 2 ) / 100000 ) * ( this._valueArray[2] / 100 ) * Math.pow( this._evalConst, 2 ) * this._valueArray[3] ) );
    
  }
  
  this._evalFormulaB = function() {
    
    return ( ( ( Math.pow( this._valueArray[6], 2 ) - Math.pow( this._valueArray[7], 2 ) ) / 100000 ) * ( this._valueArray[8] / 100 ) * Math.pow( this._evalConst, 2 ) );
    
  }
  
  this._evalFormulaC = function() {
    
    return ( ( Math.pow( ( this._valueArray[1] + 2 * this._valueArray[5] ) / 100, 2 ) - ( Math.pow( this._valueArray[1], 2 ) / 10000 ) ) * ( this._evalConst / 10 ) * ( this._valueArray[5] / 100 ) * ( this._evalConst / 2 ) );
    
  }
  
  this._getValues = function() {
    
    for (var i = 0; i < this._inputIds.length; i++) {
      
      var tempValue = parseFloat(document.getElementById(this._inputIds[i]).value.replace(/,/, "."));
      
      if (isNaN(tempValue) == true)
        tempValue = 0;
        
      this._valueArray[i] = tempValue;
      
    }
    
    return true;
    
  }
  
  this.setValues = function(value) {
    
    for (var i = 0; i < this._inputIds.length; i++) {
    
      document.getElementById(this._inputIds[i]).value = value;
      this._changeImg(this._inputIds[i], "1px.gif");
      
    }
    
    document.getElementById("fmErgebnis").innerHTML = "Fertiggewicht: <b>0</b> kg";
      
    return true;
    
  }
  
  this.validFloat = function(pointer) {
    
    if (pointer.value.search(/[^0-9,.]/) >= 0) {
      
      this._changeImg(pointer.id, "red.gif");
      
      return false;
      
    } else
      this._changeImg(pointer.id, "green.gif");
    
    return true;
    
  }
  
  this.validInt = function(pointer) {
    
    if (pointer.value.search(/[^0-9]/) >= 0) {

      this._changeImg(pointer.id, "red.gif");
      
      return false;
      
    } else
      this._changeImg(pointer.id, "green.gif");
    
    return true;  
    
  }
  
  this._changeImg = function(id, img) {
    
    document.getElementById(id + "Img").src = "images/calculator/" + img;
    
    return true;
    
  }
  
  this.evalute = function() {
    
    var ergebnis = 0;
    
    this._getValues();
    
    if (this._isBlind == true)
      ergebnis = this._evalFormulaA() + this._evalFormulaB();
    else
      ergebnis = this._evalFormulaA() - this._evalFormulaC();
      
    with (document.getElementById("fmErgebnis"))
      if (ergebnis < 0)
        innerHTML = "The result is negative. Please enter correct values.";
      else
        innerHTML = "Finished weight: <b>" + (Math.round(ergebnis * 100) / 100).toString().replace(/\./, ",") + "</b> kg";

    return true;
    
  }  
  
}