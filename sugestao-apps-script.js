const SHEET_ID  = '1OMNkrY06AhH6cjaUxrFZRfOjFP8n2O3ic7myRbb0Slg';
const FOLDER_ID = '1UpzJgKotTqFDVvBMUbh4tNO_AlIKHotu';

// ── Único endpoint: GET para tudo (POST = alias de GET) ──
function doGet(e) {
  const p = (e && e.parameter) ? e.parameter : {};

  // Ping de status
  if (!p.sugestao && !p.tipologia) {
    return _json({ status: 'online', ts: new Date().toISOString() });
  }

  // Foto em base64 → salva no Drive
  let fotoUrl = '';
  const fotoBase64 = p.foto || '';

  if (fotoBase64 && fotoBase64.indexOf('data:image') === 0) {
    try {
      const parts  = fotoBase64.split(',');
      const mime   = parts[0].replace('data:', '').replace(/;.*/, '');
      const ext    = mime.split('/')[1] || 'jpg';
      const nome   = 'sug_' + (p.tipologia || 'x').replace(/\s/g, '_') + '_' + Date.now() + '.' + ext;
      const blob   = Utilities.newBlob(Utilities.base64Decode(parts[1]), mime, nome);
      const folder = DriveApp.getFolderById(FOLDER_ID);
      const file   = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fotoUrl = file.getUrl();
      Logger.log('Foto salva: ' + fotoUrl);
    } catch (imgErr) {
      Logger.log('Erro foto: ' + imgErr.message);
      fotoUrl = '[erro foto]';
    }
  }

  return _gravar(p, fotoUrl);
}

function doPost(e) {
  return doGet(e);
}

// ── Grava linha na planilha ──
function _gravar(p, fotoUrl) {
  try {
    const ss    = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data/Hora', 'Categoria', 'Tipologia', 'Dispositivo', 'Sugestão', 'Foto']);
    }

    sheet.appendRow([
      p.hora      || new Date().toLocaleString('pt-BR'),
      p.categoria || '',
      p.tipologia || '',
      p.device    || '',
      p.sugestao  || '',
      fotoUrl     || ''
    ]);

    Logger.log('Gravado: ' + (p.tipologia || '?') + ' | foto: ' + (fotoUrl ? 'sim' : 'nao'));
    return _json({ success: true });

  } catch (err) {
    Logger.log('Erro ao gravar: ' + err.message);
    return _json({ success: false, error: err.message });
  }
}

// ── Debug ──
function testarConexao() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  Logger.log('Planilha: ' + ss.getName());
  Logger.log('Linhas: ' + ss.getSheets()[0].getLastRow());
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
