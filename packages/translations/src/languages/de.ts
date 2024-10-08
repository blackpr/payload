import type { DefaultTranslationsObject, Language } from '../types.js'

export const deTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Konto',
    accountOfCurrentUser: 'Aktuelles Benutzerkonto',
    accountVerified: 'Konto erfolgreich verifiziert.',
    alreadyActivated: 'Bereits aktiviert',
    alreadyLoggedIn: 'Bereits angemeldet',
    apiKey: 'API-Key',
    authenticated: 'Authentifiziert',
    backToLogin: 'Zurück zur Anmeldung',
    beginCreateFirstUser: 'Erstelle deinen ersten Benutzer um zu beginnen',
    changePassword: 'Passwort ändern',
    checkYourEmailForPasswordReset:
      'Du solltest eine E-Mail mit einem Link zum sicheren Zurücksetzen deines Passworts erhalten haben.',
    confirmGeneration: 'Generierung bestätigen',
    confirmPassword: 'Passwort bestätigen',
    createFirstUser: 'Ersten Benutzer erstellen',
    emailNotValid: 'Die angegebene E-Mail-Adresse ist ungültig',
    emailOrUsername: 'E-Mail oder Benutzername',
    emailSent: 'E-Mail verschickt',
    emailVerified: 'E-Mail erfolgreich verifiziert.',
    enableAPIKey: 'API-Key aktivieren',
    failedToUnlock: 'Konnte nicht entsperren',
    forceUnlock: 'Entsperrung erzwingen',
    forgotPassword: 'Passwort vergessen',
    forgotPasswordEmailInstructions:
      'Bitte gib deine E-Mail-Adresse an. Du wirst eine E-Mail mit Instruktionen zum Zurücksetzen deines Passworts erhalten.',
    forgotPasswordQuestion: 'Passwort vergessen?',
    forgotPasswordUsernameInstructions:
      'Bitte geben Sie unten Ihren Benutzernamen ein. Anweisungen zum Zurücksetzen Ihres Passworts werden an die mit Ihrem Benutzernamen verknüpfte E-Mail-Adresse gesendet.',
    generate: 'Generieren',
    generateNewAPIKey: 'Neuen API-Key generieren',
    generatingNewAPIKeyWillInvalidate:
      'Die Generierung eines neuen API-Keys wird den vorherigen Key <1>ungültig</1> machen. Bist du sicher, dass du fortfahren möchtest?',
    lockUntil: 'Sperre bis',
    logBackIn: 'Wieder anmelden',
    loggedIn:
      'Um dich mit einem anderen Benutzer anzumelden, musst du dich zuerst <0>abmelden</0>.',
    loggedInChangePassword:
      'Um dein Passwort zu ändern, gehe in dein <0>Konto</0> und ändere dort dein Passwort.',
    loggedOutInactivity: 'Du wurdest aufgrund von Inaktivität abgemeldet.',
    loggedOutSuccessfully: 'Du wurdest erfolgreich abgemeldet.',
    loggingOut: 'Abmelden...',
    login: 'Anmelden',
    loginAttempts: 'Anmelde-Versuche',
    loginUser: 'Benutzeranmeldung',
    loginWithAnotherUser:
      'Um dich mit einem anderen Benutzer anzumelden, musst du dich zuerst <0>abmelden</0>.',
    logOut: 'Abmelden',
    logout: 'Abmelden',
    logoutSuccessful: 'Abmeldung erfolgreich.',
    logoutUser: 'Benutzerabmeldung',
    newAccountCreated:
      'Ein neues Konto wurde gerade für dich auf <a href="{{serverURL}}">{{serverURL}}</a> erstellt. Bitte klicke auf den folgenden Link oder kopiere die URL in deinen Browser um deine E-Mail-Adresse zu verifizieren: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Nachdem du deine E-Mail-Adresse verifiziert hast, kannst du dich erfolgreich anmelden.',
    newAPIKeyGenerated: 'Neuer API-Key wurde generiert',
    newPassword: 'Neues Passwort',
    passed: 'Authentifizierung erfolgreich',
    passwordResetSuccessfully: 'Passwort erfolgreich zurückgesetzt.',
    resetPassword: 'Passwort zurücksetzen',
    resetPasswordExpiration: 'Passwort-Ablauf zurücksetzen',
    resetPasswordToken: 'Passwort-Token zurücksetzen',
    resetYourPassword: 'Dein Passwort zurücksetzen',
    stayLoggedIn: 'Angemeldet bleiben',
    successfullyRegisteredFirstUser: 'Erster Benutzer erfolgreich registriert.',
    successfullyUnlocked: 'Erfolgreich entsperrt',
    tokenRefreshSuccessful: 'Token-Aktualisierung erfolgreich.',
    unableToVerify: 'Konnte nicht verifiziert werden',
    username: 'Benutzername',
    usernameNotValid: 'Der angegebene Benutzername ist nicht gültig.',
    verified: 'Verifiziert',
    verifiedSuccessfully: 'Erfolgreich verifiziert',
    verify: 'Verifizieren',
    verifyUser: 'Benutzer verifizieren',
    verifyYourEmail: 'Deine E-Mail-Adresse verifizieren',
    youAreInactive:
      'Du warst seit einiger Zeit inaktiv und wirst in kurzer Zeit zu deiner eigenen Sicherheit abgemeldet. Möchtest du angemeldet bleiben?',
    youAreReceivingResetPassword:
      'Du erhältst diese Nachricht, weil du (oder jemand anderes) das Zurücksetzen deines Passworts für dein Benutzerkonto angefordert hat. Bitte klicke auf den folgenden Link, oder kopiere die URL in deinen Browser den Prozess abzuschließen:',
    youDidNotRequestPassword:
      'Solltest du dies nicht angefordert haben, ignoriere diese E-Mail und dein Passwort bleibt unverändert.',
  },
  error: {
    accountAlreadyActivated: 'Dieses Konto wurde bereits aktiviert',
    autosaving: 'Es gab ein Problem während der automatischen Speicherung für dieses Dokument',
    correctInvalidFields: 'Bitte ungültige Felder korrigieren.',
    deletingFile: 'Beim Löschen der Datei ist ein Fehler aufgetreten.',
    deletingTitle:
      'Es gab ein Problem während der Löschung von {{title}}. Bitte überprüfe deine Verbindung und versuche es erneut.',
    emailOrPasswordIncorrect: 'Die E-Mail-Adresse oder das Passwort sind nicht korrekt.',
    followingFieldsInvalid_one: 'Das folgende Feld ist nicht korrekt:',
    followingFieldsInvalid_other: 'Die folgenden Felder sind nicht korrekt:',
    incorrectCollection: 'Falsche Sammlung',
    invalidFileType: 'Ungültiger Datei-Typ',
    invalidFileTypeValue: 'Ungültiger Datei-Typ: {{value}}',
    loadingDocument: 'Es gab ein Problem, das Dokument mit der ID {{id}} zu laden.',
    localesNotSaved_one: 'Das folgende Gebietsschema konnte nicht gespeichert werden:',
    localesNotSaved_other: 'Die folgenden Gebietsschemata konnten nicht gespeichert werden:',
    logoutFailed: 'Abmeldung fehlgeschlagen.',
    missingEmail: 'E-Mail-Adresse fehlt.',
    missingIDOfDocument: 'ID des zu speichernden Dokuments fehlt.',
    missingIDOfVersion: 'ID der Version fehlt.',
    missingRequiredData: 'Erforderliche Daten fehlen.',
    noFilesUploaded: 'Es wurden keine Dateien hochgeladen.',
    noMatchedField: 'Kein übereinstimmendes Feld für "{{label}}" gefunden',
    notAllowedToAccessPage: 'Du hast keine Berechtigung, auf diese Seite zuzugreifen.',
    notAllowedToPerformAction: 'Du hast keine Berechtigung, diese Aktion auszuführen.',
    notFound: 'Die angeforderte Ressource wurde nicht gefunden.',
    noUser: 'Kein Benutzer',
    previewing: 'Es gab ein Problem beim Vorschauen dieses Dokuments.',
    problemUploadingFile: 'Es gab ein Problem während des Hochladens der Datei.',
    tokenInvalidOrExpired: 'Token ist entweder ungültig oder abgelaufen.',
    tokenNotProvided: 'Token nicht bereitgestellt.',
    unableToDeleteCount: '{{count}} von {{total}} {{label}} konnte nicht gelöscht werden.',
    unableToUpdateCount: '{{count}} von {{total}} {{label}} konnte nicht aktualisiert werden.',
    unauthorized: 'Nicht autorisiert - du musst angemeldet sein, um diese Anfrage zu stellen.',
    unknown: 'Ein unbekannter Fehler ist aufgetreten.',
    unPublishingDocument: 'Es gab ein Problem, dieses Dokument auf Entwurf zu setzen.',
    unspecific: 'Ein Fehler ist aufgetreten.',
    userEmailAlreadyRegistered: 'Ein Benutzer mit der angegebenen E-Mail ist bereits registriert.',
    userLocked:
      'Dieser Benutzer ist auf Grund zu vieler unerfolgreicher Anmelde-Versuche gesperrt.',
    usernameAlreadyRegistered:
      'Ein Benutzer mit dem angegebenen Benutzernamen ist bereits registriert.',
    usernameOrPasswordIncorrect: 'Der angegebene Benutzername oder das Passwort ist falsch.',
    valueMustBeUnique: 'Wert muss einzigartig sein',
    verificationTokenInvalid: 'Verifizierungs-Token ist nicht korrekt.',
  },
  fields: {
    addLabel: '{{label}} hinzufügen',
    addLink: 'Link Hinzufügen',
    addNew: 'Neu erstellen',
    addNewLabel: '{{label}} erstellen',
    addRelationship: 'Verknüpfung Hinzufügen',
    addUpload: 'Hochladen Hinzufügen',
    block: 'Block',
    blocks: 'Blöcke',
    blockType: 'Block-Typ',
    chooseBetweenCustomTextOrDocument:
      'Wähle zwischen einer eigenen Text-URL oder verlinke zu einem anderen Dokument.',
    chooseDocumentToLink: 'Wähle ein Dokument zum Verlinken',
    chooseFromExisting: 'Aus vorhandenen auswählen',
    chooseLabel: '{{label}} auswählen',
    collapseAll: 'Alle einklappen',
    customURL: 'Eigene URL',
    editLabelData: '{{label}} bearbeiten',
    editLink: 'Bearbeite Link',
    editRelationship: 'Beziehung Hinzufügen',
    enterURL: 'URL eingeben',
    internalLink: 'Interner Link',
    itemsAndMore: '{{items}} und {{count}} mehr',
    labelRelationship: '{{label}} Verknüpfung',
    latitude: 'Breitengrad',
    linkedTo: 'Verweist auf <0>{{label}}</0>',
    linkType: 'Linktyp',
    longitude: 'Längengrad',
    newLabel: '{{label}} erstellen',
    openInNewTab: 'Öffne im neuen Tab',
    passwordsDoNotMatch: 'Passwörter stimmen nicht überein.',
    relatedDocument: 'Verknüpftes Dokument',
    relationTo: 'Verknüpfung zu',
    removeRelationship: 'Beziehung Entfernen',
    removeUpload: 'Hochgeladene Datei Löschen',
    saveChanges: 'Änderungen speichern',
    searchForBlock: 'Nach Block suchen',
    selectExistingLabel: '{{label}} auswählen (vorhandene)',
    selectFieldsToEdit: 'Wählen Sie die zu bearbeitenden Felder aus',
    showAll: 'Alle anzeigen',
    swapRelationship: 'Beziehung Tauschen',
    swapUpload: 'Datei Austauschen',
    textToDisplay: 'Angezeigter Text',
    toggleBlock: 'Block umschalten',
    uploadNewLabel: '{{label}} neu hochladen',
  },
  general: {
    aboutToDelete: 'Du bist dabei {{label}} <1>{{title}}</1> zu löschen. Bist du dir sicher?',
    aboutToDeleteCount_many: 'Sie sind dabei, {{count}} {{label}} zu löschen',
    aboutToDeleteCount_one: 'Sie sind dabei, {{count}} {{label}} zu löschen',
    aboutToDeleteCount_other: 'Sie sind dabei, {{count}} {{label}} zu löschen',
    addBelow: 'Darunter hinzufügen',
    addFilter: 'Filter hinzufügen',
    adminTheme: 'Admin-Farbthema',
    and: 'Und',
    anotherUserTakenOver: 'Ein anderer Benutzer hat die Bearbeitung dieses Dokuments übernommen.',
    applyChanges: 'Änderungen anwenden',
    ascending: 'Aufsteigend',
    automatic: 'Automatisch',
    backToDashboard: 'Zurück zur Übersicht',
    cancel: 'Abbrechen',
    changesNotSaved:
      'Deine Änderungen wurden nicht gespeichert. Wenn du diese Seite verlässt, gehen deine Änderungen verloren.',
    clearAll: 'Alles löschen',
    close: 'Schließen',
    collapse: 'Einklappen',
    collections: 'Sammlungen',
    columns: 'Spalten',
    columnToSort: 'Spalten zum Sortieren',
    confirm: 'Bestätigen',
    confirmDeletion: 'Löschen bestätigen',
    confirmDuplication: 'Duplizieren bestätigen',
    copied: 'Kopiert',
    copy: 'Kopieren',
    create: 'Erstellen',
    created: 'Erstellt',
    createdAt: 'Erstellt am',
    createNew: 'Neu Erstellen',
    createNewLabel: '{{label}} neu erstellen',
    creating: 'Erstelle',
    creatingNewLabel: 'Erstelle {{label}}',
    currentlyEditing:
      'bearbeitet gerade dieses Dokument. Wenn Sie übernehmen, wird die Bearbeitung blockiert und nicht gespeicherte Änderungen können verloren gehen.',
    custom: 'Benutzerdefiniert',
    dark: 'Dunkel',
    dashboard: 'Übersicht',
    delete: 'Löschen',
    deletedCountSuccessfully: '{{count}} {{label}} erfolgreich gelöscht.',
    deletedSuccessfully: 'Erfolgreich gelöscht.',
    deleting: 'Lösche...',
    depth: 'Tiefe',
    descending: 'Absteigend',
    deselectAllRows: 'Alle Zeilen abwählen',
    document: 'Dokument',
    documentLocked: 'Dokument gesperrt',
    documents: 'Dokumente',
    duplicate: 'Duplizieren',
    duplicateWithoutSaving: 'Dupliziere ohne Änderungen zu speichern',
    edit: 'Bearbeiten',
    editedSince: 'Bearbeitet seit',
    editing: 'Bearbeite',
    editingLabel_many: 'Bearbeiten von {{count}} {{label}}',
    editingLabel_one: 'Bearbeiten von {{count}} {{label}}',
    editingLabel_other: 'Bearbeiten von {{count}} {{label}}',
    editingTakenOver: 'Bearbeitung übernommen',
    editLabel: '{{label}} bearbeiten',
    email: 'E-Mail',
    emailAddress: 'E-Mail-Adresse',
    enterAValue: 'Gib einen Wert ein',
    error: 'Fehler',
    errors: 'Fehler',
    fallbackToDefaultLocale: 'Rückgriff auf das Standardgebietsschema',
    false: 'Falsch',
    filter: 'Filter',
    filters: 'Filter',
    filterWhere: 'Filter {{label}} wo',
    globals: 'Globale Dokumente',
    goBack: 'Zurück',
    isEditing: 'bearbeitet',
    language: 'Sprache',
    lastModified: 'Zuletzt geändert',
    leaveAnyway: 'Trotzdem verlassen',
    leaveWithoutSaving: 'Ohne speichern verlassen',
    light: 'Hell',
    livePreview: 'Vorschau',
    loading: 'Lädt',
    locale: 'Sprache',
    locales: 'Sprachen',
    menu: 'Menü',
    moveDown: 'Nach unten bewegen',
    moveUp: 'Nach oben bewegen',
    newPassword: 'Neues Passwort',
    next: 'Nächste',
    noFiltersSet: 'Keine Filter gesetzt',
    noLabel: '<Kein {{label}}>',
    none: 'Kein',
    noOptions: 'Keine Optionen',
    noResults:
      'Keine {{label}} gefunden. Entweder es existieren keine {{label}} oder es gibt keine Übereinstimmung zu den von dir verwendeten Filtern.',
    notFound: 'Nicht gefunden',
    nothingFound: 'Keine Ergebnisse',
    noValue: 'Kein Wert',
    of: 'von',
    only: 'Nur',
    open: 'Öffnen',
    or: 'oder',
    order: 'Reihenfolge',
    pageNotFound: 'Seite nicht gefunden',
    password: 'Passwort',
    payloadSettings: 'Payload Einstellungen',
    perPage: 'Pro Seite: {{limit}}',
    previous: 'Vorherige',
    remove: 'Entfernen',
    reset: 'Zurücksetzen',
    row: 'Zeile',
    rows: 'Zeilen',
    save: 'Speichern',
    saving: 'Speichert...',
    searchBy: 'Suche nach {{label}}',
    selectAll: 'Alle auswählen {{count}} {{label}}',
    selectAllRows: 'Wählen Sie alle Zeilen aus',
    selectedCount: '{{count}} {{label}} ausgewählt',
    selectValue: 'Wert auswählen',
    showAllLabel: 'Zeige alle {{label}}',
    sorryNotFound: 'Entschuldige, es entspricht nichts deiner Anfrage',
    sort: 'Sortieren',
    sortByLabelDirection: 'Sortieren nach {{label}} {{direction}}',
    stayOnThisPage: 'Auf dieser Seite bleiben',
    submissionSuccessful: 'Einrichung erfolgreich.',
    submit: 'Senden',
    submitting: 'Wird aktualisiert...',
    success: 'Erfolg',
    successfullyCreated: '{{label}} erfolgreich erstellt.',
    successfullyDuplicated: '{{label}} wurde erfolgreich dupliziert.',
    takeOver: 'Übernehmen',
    thisLanguage: 'Deutsch',
    titleDeleted: '{{label}} {{title}} wurde erfolgreich gelöscht.',
    true: 'Wahr',
    unauthorized: 'Nicht autorisiert',
    unsavedChangesDuplicate:
      'Du hast ungespeicherte Änderungen, möchtest du mit dem Duplizieren fortfahren?',
    untitled: 'ohne Titel',
    updatedAt: 'Aktualisiert am',
    updatedCountSuccessfully: '{{count}} {{label}} erfolgreich aktualisiert.',
    updatedSuccessfully: 'Erfolgreich aktualisiert.',
    updating: 'Aktualisierung',
    uploading: 'Hochladen',
    user: 'Benutzer',
    username: 'Benutzername',
    users: 'Benutzer',
    value: 'Wert',
    viewReadOnly: 'Nur-Lese-Ansicht',
    welcome: 'Willkommen',
  },
  operators: {
    contains: 'enthält',
    equals: 'gleich',
    exists: 'existiert',
    intersects: 'schneidet sich',
    isGreaterThan: 'ist größer als',
    isGreaterThanOrEqualTo: 'ist größer oder gleich',
    isIn: 'ist drin',
    isLessThan: 'ist kleiner als',
    isLessThanOrEqualTo: 'ist kleiner oder gleich',
    isLike: 'ist wie',
    isNotEqualTo: 'ist nicht gleich',
    isNotIn: 'ist nicht drin',
    near: 'in der Nähe',
    within: 'innerhalb',
  },
  upload: {
    addFile: 'Datei hinzufügen',
    addFiles: 'Dateien hinzufügen',
    bulkUpload: 'Massenupload',
    crop: 'Zuschneiden',
    cropToolDescription:
      'Ziehen Sie die Ecken des ausgewählten Bereichs, zeichnen Sie einen neuen Bereich oder passen Sie die Werte unten an.',
    dragAndDrop: 'Ziehen Sie eine Datei per Drag-and-Drop',
    dragAndDropHere: 'oder ziehe eine Datei hier',
    editImage: 'Bild bearbeiten',
    fileName: 'Dateiname',
    fileSize: 'Dateigröße',
    filesToUpload: 'Dateien zum Hochladen',
    fileToUpload: 'Datei zum Hochladen',
    focalPoint: 'Brennpunkt',
    focalPointDescription:
      'Ziehen Sie den Fokuspunkt direkt auf die Vorschau oder passen Sie die Werte unten an.',
    height: 'Höhe',
    lessInfo: 'Weniger Info',
    moreInfo: 'Mehr Info',
    pasteURL: 'URL einfügen',
    previewSizes: 'Vorschaugrößen',
    selectCollectionToBrowse: 'Wähle eine Sammlung zum Durchsuchen aus',
    selectFile: 'Datei auswählen',
    setCropArea: 'Bereich zum Zuschneiden festlegen',
    setFocalPoint: 'Fokuspunkt setzen',
    sizes: 'Größen',
    sizesFor: 'Größen für {{label}}',
    width: 'Breite',
  },
  validation: {
    emailAddress: 'Bitte gib eine korrekte E-Mail-Adresse an.',
    enterNumber: 'Bitte gib eine gültige Nummer an,',
    fieldHasNo: 'Dieses Feld hat kein {{label}}',
    greaterThanMax: '{{value}} ist größer als der maximal erlaubte {{label}} von {{max}}.',
    invalidInput: 'Dieses Feld hat einen inkorrekten Wert.',
    invalidSelection: 'Dieses Feld hat eine inkorrekte Auswahl.',
    invalidSelections: "'Dieses Feld enthält die folgenden inkorrekten Auswahlen:'",
    lessThanMin: '{{value}} ist kleiner als der minimal erlaubte {{label}} von {{min}}.',
    limitReached: 'Limit erreicht, es können nur {{max}} Elemente hinzugefügt werden.',
    longerThanMin: 'Dieser Wert muss länger als die minimale Länge von {{minLength}} Zeichen sein.',
    notValidDate: '"{{value}}" ist kein gültiges Datum.',
    required: 'Pflichtfeld',
    requiresAtLeast: 'Dieses Feld muss mindestens {{count}} {{label}} enthalten.',
    requiresNoMoreThan: 'Dieses Feld kann nicht mehr als {{count}} {{label}} enthalten.',
    requiresTwoNumbers: 'Dieses Feld muss zwei Nummern enthalten.',
    shorterThanMax: 'Dieser Wert muss kürzer als die maximale Länge von {{maxLength}} sein.',
    trueOrFalse: 'Dieses Feld kann nur wahr oder falsch sein.',
    username:
      'Bitte geben Sie einen gültigen Benutzernamen ein. Dieser kann Buchstaben, Zahlen, Bindestriche, Punkte und Unterstriche enthalten.',
    validUploadID: "'Dieses Feld enthält keine valide Upload-ID.'",
  },
  version: {
    type: 'Typ',
    aboutToPublishSelection:
      'Sie sind dabei, alle {{label}} in der Auswahl zu veröffentlichen. Bist du dir sicher?',
    aboutToRestore: 'Du bist dabei, {{label}} auf den Stand vom {{versionDate}} zurücksetzen.',
    aboutToRestoreGlobal:
      'Du bist dabei, das Globale Dokument {{label}} auf den Stand vom {{versionDate}} zurückzusetzen.',
    aboutToRevertToPublished:
      'Du bist dabei, dieses Dokument auf den Stand des ersten Veröffentlichungsdatums zurückzusetzen - Bist du sicher?',
    aboutToUnpublish: 'Du bist dabei dieses Dokument auf Entwurf zu setzen - bist du dir sicher?',
    aboutToUnpublishSelection:
      'Sie sind dabei, die Veröffentlichung aller {{label}} in der Auswahl aufzuheben. Bist du dir sicher?',
    autosave: 'Automatische Speicherung',
    autosavedSuccessfully: 'Erfolgreich automatisch gespeichert.',
    autosavedVersion: 'Automatisch gespeicherte Version',
    changed: 'Geändert',
    compareVersion: 'Vergleiche Version zu:',
    confirmPublish: 'Veröffentlichung bestätigen',
    confirmRevertToSaved: 'Zurücksetzen auf die letzte Speicherung bestätigen',
    confirmUnpublish: 'Setzen auf Entwurf bestätigen',
    confirmVersionRestoration: ' Wiederherstellung der Version bestätigen',
    currentDocumentStatus: 'Aktueller Dokumentenstatus: {{docStatus}}',
    currentDraft: 'Aktueller Entwurf',
    currentPublishedVersion: 'Aktuell veröffentlichte Version',
    draft: 'Entwurf',
    draftSavedSuccessfully: 'Entwurf erfolgreich gespeichert.',
    lastSavedAgo: 'Zuletzt vor {{distance}} gespeichert',
    noFurtherVersionsFound: 'Keine weiteren Versionen vorhanden',
    noRowsFound: 'Kein {{label}} gefunden',
    noRowsSelected: 'Kein {{label}} ausgewählt',
    preview: 'Vorschau',
    previouslyPublished: 'Zuvor Veröffentlicht',
    problemRestoringVersion: 'Es gab ein Problem bei der Wiederherstellung dieser Version',
    publish: 'Veröffentlichen',
    publishChanges: 'Änderungen veröffentlichen',
    published: 'Veröffentlicht',
    publishIn: 'Veröffentlichen in {{locale}}',
    publishing: 'Veröffentlichung',
    restoreAsDraft: 'Als Entwurf wiederherstellen',
    restoredSuccessfully: 'Erfolgreich wiederhergestellt.',
    restoreThisVersion: 'Diese Version wiederherstellen',
    restoring: 'Wiederherstellen...',
    reverting: 'Zurücksetzen...',
    revertToPublished: 'Auf veröffentlichte Version zurücksetzen',
    saveDraft: 'Entwurf speichern',
    selectLocales: 'Wähle anzuzeigende Sprachen',
    selectVersionToCompare: 'Wähle Version zum Vergleich',
    showingVersionsFor: 'Versionen anzeigen für:',
    showLocales: 'Sprachen anzeigen:',
    status: 'Status',
    unpublish: 'Auf Entwurf setzen',
    unpublishing: 'Setze auf Entwurf...',
    version: 'Version',
    versionCount_many: '{{count}} Versionen gefunden',
    versionCount_none: 'Keine Versionen gefunden',
    versionCount_one: '{{count}} Version gefunden',
    versionCount_other: '{{count}} Versionen gefunden',
    versionCreatedOn: '{{version}} erstellt am:',
    versionID: 'Version ID',
    versions: 'Versionen',
    viewingVersion: 'Betrachte Version für {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: '`Betrachte Version für das Globale Dokument {{entityLabel}}',
    viewingVersions: 'Betrachte Versionen für {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: '`Betrachte Versionen für das Globale Dokument {{entityLabel}}',
  },
}

export const de: Language = {
  dateFNSKey: 'de',
  translations: deTranslations,
}
