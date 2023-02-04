// external imports
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// internal imports
import HeroSlideshow from "../hero-slideshow.component";

// types
import { Image } from "../../../utils/images";

describe("slideshow functionality", () => {
  const testImages: Image[] = [
    { name: "Image1", src: "image1.jpg", alt: "image1" },
    { name: "Image2", src: "image2.jpg", alt: "image2" },
    { name: "Image3", src: "image3.jpg", alt: "image3" },
  ];

  test("it starts off with the first image", () => {
    // render slideshow
    render(<HeroSlideshow images={testImages} timing={500} />);

    // get slideshow image
    const image: HTMLImageElement = screen.getByRole("img", {
      name: /image1/i,
    });

    // assert that it is the first image
    expect(image.src).toContain("image1.jpg");
  });

  test("clicking right arrow advances slides forward by one", async () => {
    // setup user and render slideshow with test images
    const user = userEvent.setup();
    render(<HeroSlideshow images={testImages} timing={500} />);

    // get the right button
    const rightButton = screen.getByRole("button", { name: /right/i });

    // click the right button
    await user.click(rightButton);

    // get the slideshow image
    const image: HTMLImageElement = await screen.findByRole("img", {
      name: /image2/i,
    });

    // assert the slideshow image is the second slide
    expect(image.src).toContain("image2.jpg");
  });

  test("clicking left arrow advances slides back to last slide", async () => {
    // setup user and render slideshow with test images
    const user = userEvent.setup();
    render(<HeroSlideshow images={testImages} timing={500} />);

    // get the left button
    const leftButton = screen.getByRole("button", { name: /left/i });

    // click the left button
    await user.click(leftButton);

    // get the slideshow image
    const image: HTMLImageElement = await screen.findByRole("img", {
      name: /image3/i,
    });

    // assert the slideshow image is the last slide
    expect(image.src).toContain("image3.jpg");
  });

  test("advancing from last slide resets image to first slide", async () => {
    // setup user and render slideshow
    const user = userEvent.setup();
    render(<HeroSlideshow images={testImages} timing={500} />);

    // get the right button
    const rightbutton = screen.getByRole("button", { name: /right/i });

    // click the right button 4 times
    await user.click(rightbutton);
    await user.click(rightbutton);
    await user.click(rightbutton);
    await user.click(rightbutton);

    // get the slideshow image
    const image: HTMLImageElement = await screen.findByRole("img", {
      name: /image2/i,
    });

    // assert that slideshow image is now second slide
    expect(image.src).toContain("image2.jpg");
  });
});
