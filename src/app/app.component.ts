import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myArr: Array<string> = [];

  ngOnInit(){
    this.populate(this.myArr);
  }
  populate(arr) {
    var str: String = "";
    for (let i = 0; i < 10; i++) {
      var temp = Math.floor(Math.random() * 140);
      switch (temp) {
        case 0:
          str = "AliceBlue";
          break;
        case 1:
          str = "AntiqueWhite";
          break;
        case 2:
          str = "Aqua";
          break;
        case 3:
          str = "Azure";
          break;
        case 4:
          str = "Beige";
          break;
        case 5:
          str = "Bisque";
          break;
        case 6:
          str = "Black";
          break;
        case 7:
          str = "BlanchedAlmond";
          break;
        case 8:
          str = "Blue";
          break;
        case 9:
          str = "BlueViolet";
          break;
        case 10:
          str = "Brown";
          break;
        case 11:
          str = "BurlyWood";
          break;
        case 12:
          str = "CadetBlue";
          break;
        case 13:
          str = "Chartreuse";
          break;
        case 14:
          str = "Chocolate";
          break;
        case 15:
          str = "Coral";
          break;
        case 16:
          str = "CornflowerBlue";
          break;
        case 17:
          str = "Cornsilk";
          break;
        case 18:
          str = "Crimson";
          break;
        case 19:
          str = "Cyan";
          break;
        case 20:
          str = "DarkBlue";
          break;
        case 21:
          str = "DarkCyan";
          break;
        case 22:
          str = "DarkGoldenRod";
          break;
        case 23:
          str = "DarkGray";
          break;
        case 24:
          str = "DarkGreen";
          break;
        case 25:
          str = "DarkKhaki";
          break;
        case 26:
          str = "DarkMagenta";
          break;
        case 27:
          str = "DarkOliveGreen";
          break;
        case 28:
          str = "DarkOrange";
          break;
        case 29:
          str = "DarkOrchid";
          break;
        case 30:
          str = "DarkRed";
          break;
        case 31:
          str = "DarkSalmon";
          break;
        case 32:
          str = "DarkSeaGreen";
          break;
        case 33:
          str = "DarkSlateBlue";
          break;
        case 34:
          str = "DarkSlateGray";
          break;
        case 35:
          str = "DarkTurquoise";
          break;
        case 36:
          str = "DarkViolet";
          break;
        case 37:
          str = "DeepPink";
          break;
        case 38:
          str = "DeepSkyBlue";
          break;
        case 39:
          str = "DimGray";
          break;
        case 40:
          str = "DodgerBlue";
          break;
        case 41:
          str = "FireBrick";
          break;
        case 42:
          str = "FloralWhite";
          break;
        case 43:
          str = "ForestGreen";
          break;
        case 44:
          str = "Fuchsia";
          break;
        case 45:
          str = "Gainsboro";
          break;
        case 46:
          str = "GhostWhite";
          break;
        case 47:
          str = "Gold";
          break;
        case 48:
          str = "GoldenRod";
          break;
        case 49:
          str = "Gray";
          break;
        case 50:
          str = "Green";
          break;
        case 51:
          str = "GreenYellow";
          break;
        case 52:
          str = "HoneyDew";
          break;
        case 53:
          str = "HotPink";
          break;
        case 54:
          str = "IndianRed";
          break;
        case 55:
          str = "Indigo";
          break;
        case 56:
          str = "Ivory";
          break;
        case 57:
          str = "Khaki";
          break;
        case 58:
          str = "Lavender";
          break;
        case 59:
          str = "LavenderBlush";
          break;
        case 60:
          str = "LawnGreen";
          break;
        case 61:
          str = "LemonChiffon";
          break;
        case 62:
          str = "LightBlue";
          break;
        case 63:
          str = "LightCoral";
          break;
        case 64:
          str = "LightCyan";
          break;
        case 65:
          str = "LightGoldenRodYellow";
          break;
        case 66:
          str = "LightGray";
          break;
        case 67:
          str = "LightGreen";
          break;
        case 68:
          str = "LightPink";
          break;
        case 69:
          str = "LightSalmon";
          break;
        case 70:
          str = "LightSeaGreen";
          break;
        case 71:
          str = "LightSkyBlue";
          break;
        case 72:
          str = "LightSlateGray";
          break;
        case 73:
          str = "LightSteelBlue";
          break;
        case 74:
          str = "LightYellow";
          break;
        case 75:
          str = "Lime";
          break;
        case 76:
          str = "LimeGreen";
          break;
        case 77:
          str = "Linen";
          break;
        case 78:
          str = "Magenta";
          break;
        case 79:
          str = "Maroon";
          break;
        case 80:
          str = "MediumAquaMarine";
          break;
        case 81:
          str = "MediumBlue";
          break;
        case 82:
          str = "MediumOrchid";
          break;
        case 83:
          str = "MediumPurple";
          break;
        case 84:
          str = "MediumSeaGreen";
          break;
        case 85:
          str = "MediumSlateBlue";
          break;
        case 86:
          str = "MediumSpringGreen";
          break;
        case 87:
          str = "MediumTurquoise";
          break;
        case 88:
          str = "MediumVioletRed";
          break;
        case 89:
          str = "MidnightBlue";
          break;
        case 90:
          str = "MintCream";
          break;
        case 91:
          str = "MistyRose";
          break;
        case 92:
          str = "Moccasin";
          break;
        case 93:
          str = "NavajoWhite";
          break;
        case 94:
          str = "Navy";
          break;
        case 95:
          str = "OldLace";
          break;
        case 96:
          str = "Olive";
          break;
        case 97:
          str = "OliveDrab";
          break;
        case 98:
          str = "Orange";
          break;
        case 99:
          str = "OrangeRed";
          break;
        case 100:
          str = "Orchid";
          break;
        case 101:
          str = "PaleGoldenRod";
          break;
        case 102:
          str = "PaleGreen";
          break;
        case 103:
          str = "PaleTurquoise";
          break;
        case 104:
          str = "PaleVioletRed";
          break;
        case 105:
          str = "PapayaWhip";
          break;
        case 106:
          str = "PeachPuff";
          break;
        case 107:
          str = "Peru";
          break;
        case 108:
          str = "Pink";
          break;
        case 109:
          str = "Plum";
          break;
        case 110:
          str = "PowderBlue";
          break;
        case 111:
          str = "Purple";
          break;
        case 112:
          str = "RebeccaPurple";
          break;
        case 113:
          str = "Red";
          break;
        case 114:
          str = "RosyBrown";
          break;
        case 115:
          str = "RoyalBlue";
          break;
        case 116:
          str = "SaddleBrown";
          break;
        case 117:
          str = "Salmon";
          break;
        case 118:
          str = "SandyBrown";
          break;
        case 119:
          str = "SeaGreen";
          break;
        case 120:
          str = "SeaShell";
          break;
        case 121:
          str = "Sienna";
          break;
        case 122:
          str = "Silver";
          break;
        case 123:
          str = "SkyBlue";
          break;
        case 124:
          str = "SlateBlue";
          break;
        case 125:
          str = "SlateGray";
          break;
        case 126:
          str = "Snow";
          break;
        case 127:
          str = "SpringGreen";
          break;
        case 128:
          str = "SteelBlue";
          break;
        case 129:
          str = "Tan";
          break;
        case 130:
          str = "Teal";
          break;
        case 131:
          str = "Thistle";
          break;
        case 132:
          str = "Tomato";
          break;
        case 133:
          str = "Turquoise";
          break;
        case 134:
          str = "Violet";
          break;
        case 135:
          str = "Wheat";
          break;
        case 136:
          str = "White";
          break;
        case 137:
          str = "WhiteSmoke";
          break;
        case 138:
          str = "Yellow";
          break;
        case 139:
          str = "YellowGreen";
          break;
      }
      arr.push(str);
    }
  }

}

