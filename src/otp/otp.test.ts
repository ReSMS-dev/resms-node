import { describe, expect, it, vi } from "vitest";
import type { ReSMS } from "../resms";
import { Otp } from "./otp";

const mockPost = vi.fn();
const mockDelete = vi.fn();

const mockResms = {
  post: mockPost,
  delete: mockDelete,
} as unknown as ReSMS;

const otp = new Otp(mockResms);

describe("Otp SDK", () => {
  it("should send an OTP", async () => {
    mockPost.mockResolvedValue({ otpId: "abc123" });

    const res = await otp.send({
      to: "+33612345678",
      message: "Your code is {CODE}",
    });
    expect(mockPost).toHaveBeenCalledWith("/otp", {
      to: "+33612345678",
      message: "Your code is {CODE}",
    });
    expect(res).toEqual({ otpId: "abc123" });
  });

  it("should verify an OTP", async () => {
    mockPost.mockResolvedValue({ success: true });

    const res = await otp.verify({ to: "+33612345678", code: "456789" });
    expect(mockPost).toHaveBeenCalledWith("/otp/verify", {
      to: "+33612345678",
      code: "456789",
    });
    expect(res).toEqual({ success: true });
  });
});
