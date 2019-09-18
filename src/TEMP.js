<div className="pt-2 mb-2">
  <button
    type="submit"
    value="Submit"
    disabled={this.props.attempts === 0 || !(this.props.tempAnswer).includes("-")}>
    Submit
  </button>
</div>
