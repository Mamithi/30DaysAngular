import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { JSEncrypt } from 'js-encrypt';

@Injectable({
  providedIn: 'root'
})
export class DecryptService {

  constructor() { }

  decryptResponse(payload) {
    const privateKey = `-----BEGIN RSA PRIVATE KEY-----
    MIIJKAIBAAKCAgEAtPQiwpWYPTL0NG6tkV05P+LcMsmUbQu4PDWUeFyWtcxw30Lc
    fHL6MpkH3JJSXj//KelzD9QPQXlGFud15tFpaBcQ1oAgOzA1lxZWoZ2vxgPTmeHZ
    cliXn441owP5sfSOqFkO5aNFRQq4uEUmhDU7Czi82elpt7u5/KCi2H0/n/7KoQfD
    ve3nnNZ0rCz9RQj/vCYYNNvIhl6OoxHez9D0Whe1d0qrPFUBvamjVsvaWoD5NX1+
    54GZu+ZcqcUp1jVJtVkHtbh++GPL1bRUWzPj2eCnmtD01KM/n6QqrdIWHMRYuqot
    FHYM6gX+8DN6+bYrVmWOb81Nb9xaG+mhsWAfRbcm27nuvsoBeXX4d7PSCDobrhLC
    8Y2LMCtMc5aBwwFXoMjA4jXCf1xkLaVMCjcb3ENPbk4q5YwUOXON/QYy9LH+SKZ6
    6yXnK42shW3A5GZ0o+4Qod8mJqCp0IJYXQvFR8puIUzFLnbyn+l6OwpR6XuT9hgw
    uhyzZlpFQ5BHDZkJQn1MC+o80Kw9wFd+d2RoOKW7HWbrdbUNvJCryeRrvIaWDXxr
    b4SoA9CDCzEuj0V0bY1KkOzJvtbNS6Gc6LHBmsQGa4oSEPP+J+I6I29qWFN3SMqm
    0O5ratJJnIpNyxP2I/7hoeOLy/FI5/IiZDzgpvJtLsB/DqryK58orzAbLTkCAwEA
    AQKCAgB07Tx42AljokVCjDIDuGWB7qmy96a9P9Fwtn6Vt9564vwciCvJDtK1V0VJ
    NhOba2cKQhtjoveoqyCrNC1vVOnzpNPwhyJMnL5EPt8D18z4+wgEa3gC91QiedYW
    3D7AyvJTvhhuMq5UCrWJ/MUCsRLSEXuWo8j4PInVwEb59RTj4dQ1cbr+Q3hiVAFY
    MEoIDeSSQ1to7IwKp5crsCR1zOPYQ3Gy/8DeX1+cmr09HMSfrq9Z7RnPpmMck6JU
    4V5DWHOkhz8AIZOKFZJlKP1JYaJd61jiJRvPOx2lnoMlhpdbR1S+abBvhEib//vY
    YquYKCqgzUbY36SmH5DqcHFXGHGbmAfHwS4Q+/3xk+BdFCPZbOyk5SGiQOSdQBeD
    PvlsAZs7ICIpPFN64C3B8ypm1vDuvBdYN8RlY4EUBLj5LiJhEJHjNhjMJMse2Jy1
    ncjxd37NFpcPyy8cw5OLwLRXpveaeVQN5qyRsayxsqfZXO+yOTApTS8SOFD55zID
    Ux6gIS2rOUnFVsNntCpuNAWmlamjc9tBAA8PwIHOsxqw6swsS3ZnvxmXHW4TyQlW
    EKU21cxncyuWN/ZvhkK+Iu0UV9CHj7cSI1MhXZJSjb9HUqGEOM5KTfldwHz/v5fM
    sQrCcF9JJn0RbI+rKPC1Cs17hrwKg2RTY07889IroJuK9HEwwQKCAQEA5qOxYKme
    sMwetudui3zUvMtmM19+TRnNEjWPfzqcfiUUObFu+30Tw7payfqdFye9k7QXRqgW
    VCU/O0de7NmKPh7xMQyK5ITx9mk6lglLkDM28Unkox7GFXRYvOwS0PFM/7Yau0/G
    2OFA0GgmnjcawZpoHemsKIjOrYt0zZxlHjD93nuy37GcfxHDX+ov89erWAIAG9bl
    1wpYOVYDqGV20zRP45kiBdSd023YkWlyEXyDGDyKmnFtl4heyQRQuv4zR33QeJw8
    otMeoJSKKea529qWjSRryltHT713+1ikRge/jFG1/TO20tUN4tHnNl9IDn5OD5oq
    jUSo63epG4eu9QKCAQEAyNnUekP5zuI8fESbcncFNAJ7E44PZQ8nDaW60uQjFbAp
    sC4UImy+JqXkvql0qTptSniQ/t/yNVr+uxAN/PCS1zBAUWbqMjPlqWB3AWnJ0v1U
    Yyf0eTyM8oGqPA1tZH7nUiOcG9RJhfIDViQ3EX5dN6ayYq/nulr9Fkx/AYY/Jn3z
    egFGAgDmaguxVuyYU/UpI3aWorwP5/da1SmYpSGHf5IVGPJHvxEA0oSmzMZA8qlF
    4vxQ6+l6AuzI1MGPWagbrcYJlU81cj/CF661VWt+Y8TRNsoFCTS493aez3mLIo2K
    NPX20c7iKrBQw+2fv1gu/fVdj9MqRWM7KK6oHVpStQKCAQAfAgT39PYD2P2MI6NG
    F5tWYpYz8/O8E+rxNsg7F7swbnXAp+0+3HsKxoQsQYhbM5mWQREcC78swvE0XA0U
    FM80ON6+dGw7+u+47D7XKxrAoVISsJePorSI7+J6S9bfxoFOo8IGStx2Dhqzqjz+
    6nOrccHru53MuU/oHyat+gfSPk3zWngbAPsETnQQ8iBOTUGZDHPNSmAOQDLKSpkl
    S7blAFR5Sf48AHDTmyIRsraGSVIqsQEFcJiGVexAZFciPMjSJMUhYgf48B9fAXlt
    1rpIJ6Q0B6CCTTFSNCvsW+eCDsqe5+Fq0EgVIlXCl+vY8Ih0gmCmUljEM2XuemD+
    9Yf9AoIBAQCy0NSNofVGzj6BeGdYykQUoNzIdSKZm5ruWI1y8m+WAIes9ekxGNVV
    /T4gzScy/vSMZ7jXYbP28rN1AX8ioWBqOugYUOLSnUeru1lYJcHsmWPG/6x1P4ZQ
    5UYVPvMUlLMHevKiCCcJHIUB7S4l4fXF9SA+IlPRou5OKv6r8cRJVbst9PJKGFkL
    MqvJMs0PemYMz6ie64XRxHPW8biX07kZx4oG8rUTk2TDCByklSD/qdqxkmfNEMly
    zzKh0E36yWMTHAwuJR31QHRht0Zz7UbSNkj5WXSQVKMUlkQffRt1QMQ6EH2VH3ZW
    ATF2rhkaNr1nlkqdIKgyrHzf5FeCAoc9AoIBAGGZ2iYeTqnbxOsvRRSFaDIaHAUP
    tIck3t8ZFy8N84LvK08JbYu42q2v8rIwtiGAUlMnYTPiid5q956t3ZAmMIYW8gos
    6OQVBcynFTdz/m8ZBFUkdS0HMKtOZ7m75KJLWp68I0qKlGv/DuOYEyKGCcSCGLe6
    n39MLZJk+rmdsXawyqxGbVfH/mSPaajEYds2W9mfkPQ9ywxva5ensdX1qnm/GcBd
    QTMiczw9ZB6+qzlrU2HywAho7TJyFOIX9aS9SfrJbWeFwWZWRhNV1I66kQ1Rs+Yj
    tuFytiRi0w/qZxtGND0c5QdeG1Tf+0+43GRgipe1X6fhhGLE55ya4y4db08=
    -----END RSA PRIVATE KEY-----`;



    // console.log(payload);
    // Split the data at the separator
    const data = payload.split('llmwns');

    // Individual data from the data
    const encryptedResponse = data[0];
    const encryptedKey = data[1];
    const ivData = data[2];
    const saltData = data[3];




    // Start Asymetric decryption
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(privateKey);
    const encryptKey = decrypt.decrypt(encryptedKey);


    // Start Symetric decryption
    const salt = CryptoJS.enc.Hex.parse(saltData);
    const iv = CryptoJS.enc.Hex.parse(ivData);

    const key = CryptoJS.PBKDF2(encryptKey, salt, { hasher: CryptoJS.algo.SHA512, keySize: 64 / 8, iterations: 999});

    const decrypted = CryptoJS.AES.decrypt(encryptedResponse, key, { iv: iv});

    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  }
}
