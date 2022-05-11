<template>
  <div class="page">
    <div class="sider-financiador">
      <div class="sider-fornecedor">
        <div class="menu-hero">
          <div class="sider-logo">
            <h1 class="logo">Logo</h1>
          </div>
          <div />
          <div class="menu-item">
            <h2 class="title">Notas fiscais</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="page-header">
      <h3>Notas fiscais</h3>
      <div>Visualise as notas fiscais que voce tem.</div>
    </div>
    <div class="frame-704">
      <div class="table-header">
        <div class="rectangle-224">
          <div class="nota-fiscal"></div>
          <div class="sacado"></div>
          <div class="cedente"></div>
          <div class="emissao"></div>
          <div class="valor"></div>
          <div class="status"></div>
        </div>
      </div>
      <div v-for="items in values" :key="items.value" class="table-box">
        <div class="table-box-invoice-number">
          {{ items.orderNumber }}
        </div>
        <div class="table-box-invoice-buyer">
          {{ items.buyer.name }}
        </div>
        <div class="table-box-invoice-provider">
          {{ items.provider.name }}
        </div>
        <div class="table-box-invoice-emission-date">
          {{ items.emissionDate }}
        </div>
        <div class="table-box-invoice-value">
          {{ items.value }}
        </div>
        <div class="table-box-invoice-status">
          {{ items.orderStatusBuyer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/Invoice.css";
import axios from "axios";
//import axios from 'axios'
export default {
  name: "InvoicesTable",
  data() {
    return {
      values: [],
      items: [{ message: "Algo" }, { message: "Outro" }],
    };
  },
  created() {
    this.getInvoices();
  },
  methods: {
    getInvoices() {
      axios.get("http://127.0.0.1:3000").then((response) => {
        this.values = response.data.map((item) => item);
        console.log(response.data);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to divmit CSS to this component only -->
