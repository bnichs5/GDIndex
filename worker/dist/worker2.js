const duplicateFiles = files.concat(files.filter(f => f.mimeType !== 'application/vnd.google-apps.folder').map(f => ({ ...f, name: f.name + '.strm' })))


