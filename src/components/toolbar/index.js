export default {
  props: {
    title: {
      type: String,
    },
  },
  render() {
    return (
      <div class="alert alert-primary" role="alert" title={this.title}>
        { this.title }
      </div>
    );
  }
};
