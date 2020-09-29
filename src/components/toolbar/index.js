export default {
  props: {
    title: {
      type: String,
    },
  },
  mounted() {
    // setTimeout(() => {
    // esling-disable-nextline
    // console.log('toolbar=> ' + _.compact([0, 1, false, 2, '', 3])) //
    // }, 1000)
  },
  render() {
    return (
      <div class="alert alert-primary" role="alert" title={this.title}>
        { this.title }
      </div>
    );
  }
};
