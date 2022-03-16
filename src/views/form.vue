<template>

  <p>
    月<br />
    <input type="radio" name="d1" value= "true" class="radio" id="getu_maru" />
    <label for="getu_maru" class="maru">〇</label>
    <input type="radio" name="d1" value="false" class="radio" id="getu_batu" />
    <label for="batu" class="batu">✖</label>
  </p>

  <p>
    火<br />
    <input type="radio" name="d2" value="true" class="radio" id="ka_maru" />
    <label for="ka_maru" class="maru">〇</label>
    <input type="radio" name="d2" value="false" class="radio" id="ka_batu" />
    <label for="ka_batu" class="batu">✖</label>
  </p>

  <p>
    水<br />
    <input type="radio" name="d2" value="true" class="radio" id="sui_maru" />
    <label for="sui_maru" class="maru">〇</label>
    <input type="radio" name="d2" value="false" class="radio" id="sui_batu" />
    <label for="sui_batu" class="batu">✖</label>
  </p>

  <p>
    木<br />
    <input type="radio" name="d2" value="true" class="radio" id="moku_maru" />
    <label for="moku_maru" class="maru">〇</label>
    <input type="radio" name="d2" value="false" class="radio" id="moku_batu" />
    <label for="moku_batu" class="batu">✖</label>
  </p>

  <p>
    金<br />
    <input type="radio" name="d2" value="true" class="radio" id="kin_maru" />
    <label for="kin_maru" class="maru">〇</label>
    <input type="radio" name="d2" value="false" class="radio" id="kin_batu" />
    <label for="kin_batu" class="batu">✖</label>
  </p>

  <p>
    土<br />
    <input type="radio" name="d2" value="true" class="radio" id="do_maru" />
    <label for="do_maru" class="maru">〇</label>
    <input type="radio" name="d2" value="false" class="radio" id="do_batu" />
    <label for="do_batu" class="batu">✖</label>
  </p>

  <p>
    日<br />
    <input type="radio" name="d2" value="true" class="radio" id="nichi_maru" />
    <label for="nichi_maru" class="maru">〇</label>
    <input type="radio" name="d2" value="false" class="radio" id="nichi_batu" />
    <label for="nichi_batu" class="batu">✖</label>
  </p>

  <p><input type="submit" value="登録する" /></p>
</template>

<style>
/* .radio{
    display: none;
    
} */
.maru{
    font-size: 30px;
}
.batu{
    font-size: 30px;
}
</style>