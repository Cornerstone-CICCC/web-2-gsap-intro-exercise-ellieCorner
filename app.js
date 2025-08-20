const timeLine = gsap.timeline({
  repeat: -1,
  defaults: { duration: 0.8, ease: "power2.out" },
});

const boxes = [".red", ".green", ".blue", ".yellow"];
const BOX_SIZE = 200;

const vw = window.innerWidth;
const vh = window.innerHeight;

boxes.forEach((box, i) => {
  timeLine.fromTo(
    box,
    { width: 0, height: 0, x: 0, y: 0, borderRadius: "0%" },
    { width: BOX_SIZE, height: BOX_SIZE },
    i === 0 ? 0 : "<0.6"
  );
});

timeLine
  .to(".red", { x: vw - BOX_SIZE, y: 0, borderRadius: "50%" }, "move")
  .to(".green", { x: 0, y: vh - BOX_SIZE, borderRadius: "50%" }, "move")
  .to(".blue", { x: -vw + BOX_SIZE, y: 0, borderRadius: "50%" }, "move")
  .to(".yellow", { x: 0, y: -vh + BOX_SIZE, borderRadius: "50%" }, "move");

timeLine.to(boxes, { duration: 0.5 }, "+=0.3");

timeLine
  .to(".red", { x: vw * 1.5, opacity: 0 }, "disappear")
  .to(".green", { x: vw * 1.5, opacity: 0 }, "disappear")
  .to(".blue", { x: -vw * 1.5, opacity: 0 }, "disappear")
  .to(".yellow", { x: -vw * 1.5, opacity: 0 }, "disappear");

timeLine.set(boxes, {
  x: 0,
  y: 0,
  opacity: 1,
  width: 0,
  height: 0,
  borderRadius: "0%",
});
