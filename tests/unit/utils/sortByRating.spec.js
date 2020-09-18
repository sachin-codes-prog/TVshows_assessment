
import {sortTvShow} from "@/utils/sortByRating";
describe("In common, ", () => {

    it("sortTvShow should return 0 when a and b have same ratings", () => {
        const a = { rating: { average: "9.5"} };
        const b = { rating: { average: "9.5" } };
        const expected = sortTvShow(a, b);
        expect(expected).toBe(0);
    });
    it("sortTvShow should return -1 when a has higher rating", () => {
        const a = { rating: { average: "7.0" } };
        const b = { rating: { average: "6.4" } };
        const expected = sortTvShow(a, b);
        expect(expected).toBe(-1);
    });

    it("sortTvShow should return 1 when b has higher rating", () => {
        const a = { rating: { average: "5.3" } };
        const b = { rating: { average: "8.9" } };
        const expected = sortTvShow(a, b);
        expect(expected).toBe(1);
    });

});
