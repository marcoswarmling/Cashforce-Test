<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
    rel="stylesheet"
  />
  <div class="page">
    <div class="frame-subtitle">
      <div>
        <img src="../assets/Vector.png" alt="" />
        <h3 class="subtitle">Notas fiscais</h3>
      </div>
      <div class="visualize-propostas">
        Visualise as notas fiscais que voce tem.
      </div>
    </div>
      <div class="sider-fornecedor">
        <div class="menu-hero">
          <div class="sider-logo">
            <img src="../assets/logo.png" alt="logo da empresa cachforce" />
          </div>
          <div />
          <div class="menu-item">
            <img
              src="../assets/Rectangle_69.png"
              class="rectangle-img"
              alt="um retangulo que diz que a aba notas fiscais esta selecionada"
            />
            <img
              src="../assets/emoji.png"
              class="emoji-image"
              alt="emoji de cumprimento formal"
            />
            <h2 class="selected-title">Notas fiscais</h2>
          </div>
      </div>
    </div>
    <div class="frame-704">
      <div class="table-header">
        <div class="rectangle-224">
          <div class="nota-fiscal">NOTA FISCAL</div>
          <div class="sacado">SACADO</div>
          <div class="cedente">CEDENTE</div>
          <div class="emissao">EMISSÂO</div>
          <div class="valor">VALOR</div>
          <div class="status">STATUS</div>
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
         R$ {{ items.value }}
        </div>
        <div class="table-box-invoice-status">
          {{ ordersSwitch(items.orderStatusBuyer) }}
        </div>
        <div class="btn-box">
          <a class="btn">
            <div class="btn-text">Dados do cedente</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../styles/Invoice.css";
import axios from "axios";
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
    ordersSwitch(orders) {
      switch (orders) {
        case "0":
          return "Pendente de confirmação";
        case "1":
          return "Pedido confirmado";
        case "2":
          return "Não reconhece o pedido";
        case "3":
          return "Mercadoria não recebida";
        case "4":
          return "Recebida com avaria";
        case "5":
          return "Devolvida";
        case "6":
          return "Recebida com devolução parcial";
        case "7":
          return "Recebida e confirmada";
        case "8":
          return "Pagamento Autorizado";
        default:
          return "";
      }
    },
  },
};
</script>
