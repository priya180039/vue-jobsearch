import { fireEvent, render, screen, waitFor } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  describe('Display Logo', () => {
    it('display company logo', () => {
      render(MainNav)
      const el = screen.getByAltText('logo').getAttribute('src')
      expect(el).toContain('mainLogo.png')
    })
  })
  describe('Hover Change', () => {
    it('display different logo when hovered', async () => {
      render(MainNav)
      const testHover = screen.getByTestId('test-hover')
      fireEvent.mouseOver(testHover)

      await waitFor(() => {
        const el = screen.getByTestId('test-hover').querySelector('img').getAttribute('src')
        expect(el).toContain('hoverLogo.png')
      })
    })
    it('display main logo when not hovered', async () => {
      render(MainNav)
      const testHover = screen.getByTestId('test-hover')
      fireEvent.mouseLeave(testHover)

      await waitFor(() => {
        const el = screen.getByTestId('test-hover').querySelector('img').getAttribute('src')
        expect(el).toContain('mainLogo.png')
      })
    })
  })
})
