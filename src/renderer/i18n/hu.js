// -*- mode: js-jsx -*-
/* Bazecor -- Kaleidoscope Command Center
 * Copyright (C) 2019  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const Hungarian = {
  language: "Magyar",
  errors: {
    deviceDisconnected: "Az billentyűzet lecsatlakozott"
    //TODO translation required
    // invalidLayerFile: "Not a valid Layer file",
    // exportError: "Error at Exporting: "
  },
  components: {
    layer: "{0}. réteg",
    save: {
      success: "Elmentve!",
      saveChanges: "Mentés"
    }
  },
  dialog: {
    ok: "Ok",
    cancel: "Mégsem"
  },
  app: {
    device: "Billentyűzet",
    menu: {
      welcome: "Üdvözlet",
      editor: "Kiosztás & színtérkép szerkesztő",
      firmwareUpdate: "Vezérlő frissítés",
      keyboardSettings: "Billentyűzet beállítások",
      preferences: "Beállítások",
      selectAKeyboard: "Billentyűzet választás",
      selectAnotherKeyboard: "Másik billentyűzet választás",
      chat: "Csevegőszoba",
      feedback: "Visszajelzés küldése",
      exit: "Kilépés",
      keyboardSection: "Billentyűzet",
      bazecorSection: "Bazecor",
      miscSection: "Egyéb",
      upgradeAvailable: "Frissítés érhető el!"
    },
    deviceMenu: {
      Homepage: "Honlap",
      Forum: "Fórum",
      Chat: "Csevegőszoba"
    },
    cancelPending: {
      title: "Eldobja a függőben lévő változtatásokat?",
      content: `Függőben lévő változásokat észleltünk.
 Ha folytatja, ezek elvesznek.`
    }
  },
  editor: {
    keyType: "Gomb tipus",
    keyCode: "Gomb kód",
    groups: {
      Letters: "Betűk",
      Digits: "Számok",
      Punctuation: "Központozás",
      Spacing: "Szóközök",
      Modifiers: "Módosítók",
      Navigation: "Navigáció",
      "Fx keys": "Fx gombok",
      Numpad: "Numerikus billentyűzet",
      Miscellaneous: "Egyebek",
      "Shift to layer": "Ideiglenese réteg váltás",
      "Lock layer to": "Réteg váltás",
      "LED Effect": "LED gombok",
      Macros: "Makrók",
      Media: "Média",
      "Mouse movement": "Egér mozgatás",
      "Mouse button": "Egér gombok",
      "Mouse wheel": "Egér görgő",
      "Mouse warp": "Egér ugrás",
      "OneShot modifiers": "Egyszeri módosítók",
      "OneShot layers": "Egyszeri réteg váltók",
      TapDance: "TapDance",
      Leader: "Vezérgomb",
      Steno: "Steno",
      SpaceCadet: "SpaceCadet",
      Blank: "Üres gombok",
      "Unknown keycodes": "Ismeretlen kódok"
    },
    clearLayer: "Réteg ürítése...",
    clearLayerQuestion: "Ürítsük a réteget?",
    clearLayerPrompt: "Ez visszaállítja a réteget annak alapbeállításaira.",
    copyFrom: "Réteg másolás máshonnan...",
    pleaseSelectLayer: "Válasszon réteget...",
    dualUse: "Nyomvatartáskor módosító, normál gomb egyébként",
    dualUseLayer: "Nyomvatartáskor réteg váltó, normál gomb egyébként",
    layoutMode: "Billentyűzetkiosztás szerkesztése",
    colormapMode: "Színtérkép szerkesztése",
    importExport: "Aktuális réteg importálása/exportálása",
    importExportDescription:
      "Az alábbi adatok szabadon szerkeszthetőek, vagy máshova másolhatóak, hogy később vissza lehessen illeszteni. Ezek az adatok a Bazecor belső adatszerkezetét tükrözik, óvatosan szerkessze.",
    loadDefault: "Alapértelmezett kiosztás betöltése:",
    copyToClipboard: "Másolás a vágólapra",
    copySuccess: "Másolva!",
    pasteFromClipboard: "Beillesztés a vágólapról",
    pasteSuccess: "Beillesztve!"
  },
  preferences: {
    devtools: "Fejlesztői eszközök",
    language: "Nyelv",
    interface: "Felhasználói felület",
    advanced: "Haladó beállítások",
    darkMode: "Sötét mód",
    verboseFocus: "Bőbeszédű naplózás"
  },
  keyboardSettings: {
    advanced: "Haladó beállítások",
    keymap: {
      title: "Kiosztás beállításai",
      noDefault: "Nincs alapértelmezett réteg",
      showHardcoded: "Beépített rétegek mutatása",
      onlyCustom: "Kizárólag testreszabott rétegek használata",
      defaultLayer: "Alapértelmezett réteg"
    },
    advancedOps: "Haladó billentyűzet beállítások és műveletek",
    resetEEPROM: {
      button: "EEPROM visszaállítása gyári alapbeállításokra",
      dialogTitle: "Visszaállítja az EEPROM-ot gyári alapbeállításokra?",
      dialogContents: `Ez visszaállítja az EEPROM-ot gyári alapbeállításokra.
Minden testreszabott beállítás el fog veszni.`
    }
  },
  keyboardSelect: {
    unknown: "Ismeretlen",
    selectPrompt: "Kérem válasszon billentyűzetet:",
    noDevices: "Nincs ismert billentyűzet csatlakoztatva!",
    connect: "Kapcsolódás",
    disconnect: "Lecsatlakozás",
    scan: "Billentyűzet keresés",
    installUdevRules: "Javítás",
    permissionError: `A számítógépe nem engedi, hogy a BAZECOR beszéljen a billentyűzetével. (Nincs elegendő jogosultsága a {{path}} állományhoz.)`,
    permissionErrorSuggestion: `A BAZECOR ezt ki tudja javítani, egy udev szabály állomány /etc/udev/rules.d/ alá másolásával.`
  },
  firmwareUpdate: {
    dialog: {
      selectFirmware: "Válasszon vezérlőt",
      firmwareFiles: "Vezérlő állományok",
      allFiles: "Minden állomány"
    },
    flashing: {
      error: "Hiba a vezérlő frissítése közben",
      troubleshooting: "Hibaelhárítás",
      success: "Vezérlő sikeresen frissítve!",
      button: "Frissítés",
      buttonSuccess: "Frissítve!"
    },
    defaultFirmware: "Bazecor {0} alapértelmezett",
    defaultFirmwareDescription: "Minimális, extrák nélkül",
    experimentalFirmware: "Bazecor {0} kísérleti",
    experimentalFirmwareDescription: "Experimental, extra kiegészítőkkel",
    selected: "Kiválasztott vezérlő",
    custom: "Egyedi vezérlő",
    description: `A billentyűzet vezérlő frissítésevel tanítjuk új trükkökre. A Bazecor olyan új vezérlőt fog telepíteni, mely tartalmazza az eszközöket melyek lehetővé teszik a kiosztás szerkesztését, és még más dolgokat is. Ha korábban már testreszabta a vezérlőt, akkor ez a művelet felül fogja azt írni. A Bazecor által telepíthető vezérlő forrása mindig megtalálható az alábbi címen:`,
    postUpload: `Amint a frissítés befejeződött, a Bazecor vissza fogja vinni a billentyűzet választó képernyőre.`
  },
  welcome: {
    title: "Üdvözöljük!",
    contents: `A Bazecor felismerte a billentyűzetét, de a folytatáshoz frissíteni kell a vezérlőjét.`,
    gotoUpdate: "Vezérlő frissítés",
    reconnect: "Újracsatlakozás",
    reconnectDescription: `Elképzelhető, hogy hibásan ismertük fel a billentyűzet által kínált funkcionalitást, vagy az is, hogy a billentyűzet még nem állt teljesen rendelkezésre mikor csatlakozni próbáltunk. Ebben az esetben az "{0}" gombra kattintva újra megpróbálunk csatlakozni. Az újracsatlakozás akkor hasznos, ha biztosak vagyunk benne, hogy átmeneti hiba állt fenn, és azóta megoldódott.`
  }
};

export { Hungarian as default };
